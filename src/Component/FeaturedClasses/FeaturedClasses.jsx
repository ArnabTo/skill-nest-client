import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const FeaturedClasses = () => {
    const axiosPublic = useAxiosPublic();
    const {data: featuredClasses =[], refetch} = useQuery({
        queryKey: ['featuredClasses'],
        queryFn: async()=>{
            const res = await axiosPublic.get('/classes')
            return res.data;
        }
    })
    return [featuredClasses, refetch]
};

export default FeaturedClasses;