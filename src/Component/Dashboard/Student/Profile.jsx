
import { Avatar } from 'flowbite-react';
import { useContext, useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { AuthContext } from '../../../Provider/AuthProvider';
const Profile = () => {
    const { user } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure();
    console.log(user)
    const [data, setUserData] = useState()
   useEffect(()=>{
        axiosSecure.get(`/user/${user?.email}`)
        .then(res=>{
            setUserData(res.data)
        })
    },[axiosSecure, user.email])
    return (
        <div>
            <div data-aos="fade-up">
                <h1 className='text-2xl text-center font-semibold mt-8'>Profile</h1>
            </div>
            <div className='flex flex-col md:flex-row justify-center items-center mt-24'>
                <div className='flex-1 text-start bg-[#252525] text-white mx-4 rounded px-8 py-8 leading-4'>
                    <Avatar img={user?.photoURL} alt="avatar of Jese" rounded />
                    <h1 className='text-2xl font-bold '><span className='text-[#FE325B]'>Name:</span> {user?.displayName}</h1> 
                    <p className='text-2xl font-bold'><span className='text-[#FE325B]'>Email:</span> {data?.email}</p> 
                    <p className='text-2xl font-bold'><span className='text-[#FE325B]'>Phone Number:</span> {data?.phone}</p> 
                    <p className='text-2xl font-bold'><span className='text-[#FE325B]'>Role:</span> {data?.role}</p> 
                </div>
                <div className='flex-1' data-aos="fade-up"><img id='floating' src="https://i.ibb.co/QfTJR75/undraw-Profile-re-4a55.png" /></div>
            </div>
        </div>
    );
};

export default Profile;