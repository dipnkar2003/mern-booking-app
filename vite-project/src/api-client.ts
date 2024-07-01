import { RegisterFormData } from "./pages/Register";
import { SignInFormData } from "./pages/Signin";

const API_BASE_URL = import.meta.env.BASE_URL || "";
// const url = "http://localhost:7000"
export const register = async (formData: RegisterFormData) => {


    const response = await fetch(`${API_BASE_URL}/api/users/register`, {
      method: "POST",
      credentials:"include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

  
    if (!response.ok) {
    
      throw new Error(await response.json());
    }
  
  };
  export const signIn = async (formData: SignInFormData) => {


    const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
      method: "POST",
      credentials:"include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

  const body = await response.json()
    if (!response.ok) {
    
      throw new Error(body);
    }
return body
  
  };
export const signOut = async()=>{
  const response = await fetch(`${API_BASE_URL}/api/auth/logout`, {
    method: "POST",
    credentials:"include",
   
  });
  if(!response.ok){
    throw new Error("error during log out")
  }
}
  

  export const validateToken = async ()=>{
    const response = await fetch(`${API_BASE_URL}/api/auth/validate-token`, {
      credentials:"include",
      
    });
    if (!response.ok) {
    throw new Error(await response.json());
  }
  }