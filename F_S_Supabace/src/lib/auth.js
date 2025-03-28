import supabase from "./supabase";

export async function singUp(email,password, usename="") {
    
let data = await supabase.auth.signUp({
    email: email,
    password: password
  })
  
    if(data?.user){
        const { data: sessionData } = await supabase.auth.getSession()

        if(!sessionData?.session) {
          console.log('No active session yet - profile will be created on first signin')
          return data;
        }
    

    const displayName = usename || email.split("@")[0];

    const {data: profileData, error : profileErorr} = await supabase
    .from('users')
    .insert({
        id: data.user.id,
        usename: displayName,
        avatar_url: null
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
  if (error) throw error

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

  const { data : sessionData} = await supabase.auth.getSession()

  const { data : userData, error} = await supabase.from('users')

  .select("*")
  .eq("id", userId)
  .single() 

  if(error && error.code === "PGRST116"){
    console.log('No profile found, attempting to create one for user:', userId)

    const email = userData?.user.email;

    const defaultUsername = email ? email.split("@")[0] : `user_${Date.now()}`;

    // Creation Profile

    const {data: newProfileData, error : profileErorr} = await supabase
    .from('users')
    .insert({
        id: userId,
        usename: defaultUsername,
        avatar_url: null
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