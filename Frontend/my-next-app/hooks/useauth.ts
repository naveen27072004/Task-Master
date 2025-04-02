import { useQuery,useMutation } from "@tanstack/react-query";
import { loginreq,registerreq } from "@/services/authservice";
import { LoginReq,SighnupReq } from "@/types/auth";

export const useLogin = () =>{
    return useMutation({
        mutationFn: (data:LoginReq) => loginreq(data)
    })
}   

export const usesighnup = () =>{
    return useMutation({
        mutationFn: (data:SighnupReq) => registerreq(data)
    })
}
