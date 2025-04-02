import supabase from "./supabase";

export async function singUp(email,password, username="") {
    
let { data, error } = await supabase.auth.signUp({
    email: email,
    password: password
  })
  
    if(data?.user){
        const { data: sessionData } = await supabase.auth.getSession()

        if(!sessionData?.session) {
          console.log('No active session yet - profile will be created on first signin')
          return data;
        }
    

    const displayName = username || email.split("@")[0];

    const {data: profileData, error : profileErorr} = await supabase
    .from('users')
    .insert({
        id: data.user.id,
        username: displayName,
        avater_url: null
    })
    .select()
    .single()

    if(profileErorr){
      console.error("profile creation erorr:", profileErorr)
    }else{
      console.log("Profile created successfully", profileData)
    }

  }

    return data
}


export async function singIn(email, password) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password
  })

  console.log("user info ", data)
  if(error) throw error

  // Check if user profile exists, create if it doesn't
  if(data?.user){
    try{
      const profile = await getUserProfile(data.user.id)
      console.log("Profile info", profile)

    }catch(profileError){
      console.error('Error with profile during signin:',profileError)
    }
  }
}

export async function getUserProfile(userId) {

  const { data : sessionData } = await supabase.auth.getSession()

  const { data : error} = await supabase.from('users')
  .select('*')
  .eq('id', userId)
  .single() 

  if(error && error.code === "PGRST116"){
    console.log('No profile found, attempting to create one for user:', userId)

    // get user email to drive username if needed

    const { data : userData} = await supabase.auth.getUser();
    console.log("True data", userData);

    const email = userData?.user.email;

    const defaultUsername = email ? email.split("@")[0] : `user_${Date.now()}`;

    // Creation Profile

    const {data: newProfile, error : profileErorr} = await supabase
    .from('users')
    .insert({
        id: userId,
        usename: defaultUsername,
        avater_url: null
    })
    .select()
    .single()

    if(profileErorr){
      console.error("profile creation erorr:", profileErorr)
      throw profileErorr
    }else{
      console.log("Profile created successfully", newProfile)
    }

    return newProfile
  }

  if(error){
    console.error('Error fetching profile:',error)
    throw error;
  }

  console.log("exiting profile")

  return sessionData()

  
}