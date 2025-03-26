import supabase from "./supabase";

export async function singUp(email,password, usename="") {
    
let data = await supabase.auth.signUp({
    email: email,
    password: password
  })
  
    console.log(data);
}