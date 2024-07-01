import { useMutation, useQueryClient } from "react-query"
import { useAppContext } from "../contexts/AppContext"
import * as apiClient from"../api-client"
import { useNavigate } from "react-router-dom"

const  SignOutButton  = ()=>{
    const queryClient = useQueryClient()
    const {showToast} = useAppContext()
    const navigate =  useNavigate()
    const mutation = useMutation(apiClient.signOut,{
        onSuccess: async()=>{
            await queryClient.invalidateQueries("validateToken");
            showToast({message:"log out sucessfully",type:"SUCCESS"})
            navigate("/register")

        },
        onError:()=>{
            showToast({message:"error during logout",type:"ERROR"})
        }
    })
    const handelClick = ()=>{
        mutation.mutate()
    }
    return(

        <button onClick={handelClick} className="text-blue-600 px-3 font-bold hover:bg-gray-100">Sign Out</button>
    )
}

export default SignOutButton