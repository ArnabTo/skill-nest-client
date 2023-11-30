import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
    const {user} = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const {data: isAdmin, isPending: isAdminPending } = useQuery({
         queryKey:[user?.email, 'isadmin'],
         queryFn: async()=>{
             const res = await axiosSecure.get(`/users/admin/${user.email}`)
             console.log(res.data)
             return res.data
         }
    })

    return [isAdmin, isAdminPending]
};

export default useAdmin;
