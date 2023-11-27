import { async } from "@firebase/util";
import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const axiosSecure = axios.create(
    {
        baseURL: 'http://localhost:5003/'
    }
)

const useAxiosSecure = () => {
    const navigate = useNavigate();
    const {logOut} = useContext(AuthContext); 

    axiosSecure.interceptors.request.use(function(config){
        const token = localStorage.getItem('jwttoken')
        config.headers.authorization = `Bearer ${token}`
        return config
    }, function(error){
        return Promise.reject(error)
    });

    axiosSecure.interceptors.response.use(function(response){
        return response
    }, async(error)=>{
        const status = error.response.status;

        if(status === 401 || status === 403){
            await logOut();
            navigate('/signin')
        }
        return Promise.reject(error)
    })
    return axiosSecure
};

export default useAxiosSecure;