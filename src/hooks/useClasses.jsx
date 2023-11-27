import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useClasses = () => {
    const axiosPublic = useAxiosPublic();
    const { data: allclasses = [], refetch } = useQuery({
        queryKey: ['allClasses'],
        queryFn: async() => {
            const res = await axiosPublic.get('/allclasses')
            // console.log(res.data)
            return res.data
        }
    })
    return [allclasses, refetch]
};

export default useClasses;