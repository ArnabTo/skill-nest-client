import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

const useTeacher = () => {
    const {user} = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const {data: isTeacher, isPending: isTeacherPending } = useQuery({
         queryKey:[user?.email, 'isTeacher'],
         queryFn: async()=>{
             const res = await axiosSecure.get(`/users/teacher/${user.email}`)
             console.log(res.data)
             return res.data
         }
    })

    return [isTeacher, isTeacherPending]
};

export default useTeacher;
