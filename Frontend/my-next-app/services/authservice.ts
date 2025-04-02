import axiosInstance from "@/utils/axiosInstance";
import apiEndpoints from "@/apiendpoints/auth";
import { LoginReq,SighnupReq} from "@/types/auth";


export const loginreq = async (data:LoginReq) =>{
const response = await axiosInstance.post(apiEndpoints.auth.login,data)
return response.data
}

export const registerreq = async (data:SighnupReq)=>{
 const response  = await axiosInstance.post(apiEndpoints.auth.register,data)
 return response.data
}