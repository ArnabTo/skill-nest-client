import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import useAxiosSecure from './useAxiosSecure';
const useClassCart = () => {
    const {user} = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();

    const {data: cart=[], refetch} = useQuery({
        queryKey:['cart', user?.email],
        queryFn: async()=>{
            const result = await axiosSecure.get(`/classcart?email=${user.email}`)
            console.log(result)
            return result.data
        }
    })
    return [cart, refetch]
};

export default useClassCart;