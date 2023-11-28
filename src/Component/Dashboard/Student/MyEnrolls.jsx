import { useContext } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../Provider/AuthProvider";

const MyEnrolls = () => {
    const {user} = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    
    

    return (
        <div>
            MyEnroll
        </div>
    );
};

export default MyEnrolls;