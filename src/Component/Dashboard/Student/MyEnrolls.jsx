import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";
import BeatLoader from "react-spinners/BeatLoader";
import { css } from "@emotion/react";

const MyEnrolls = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const [classData, setClassData] = useState([])
    const [allEnrolls, setAllEnolls] = useState([])
    const [loader, setLoader] = useState(true);
    
    useEffect(() => {
        axiosSecure.get(`/myenrolls/${user.email}`)
            .then(res => {
                setClassData(res.data)
                console.log(res.data)
            })

    }, [axiosSecure, user?.email])
    useEffect(() => {
        const enrolledClassInfo = {
            email: user.email,
            title: classData.title,
            name: classData.name,
            image: classData.image,
            disc: classData.short_description
        }
        // console.log(enrolledClassInfo)
        axiosSecure.post('/allenrolled', enrolledClassInfo)
            .then(res => {
                 console.log(res.data)
            })
    }, [axiosSecure, classData.title, classData.name, classData.image, classData.short_description, user.email])

    useEffect(()=>{
        axiosSecure.get(`/allenrolled/${user?.email}`)
        .then(res => {
            setAllEnolls(res.data)
            console.log(res.data)
        })
    },[axiosSecure, user.email])

    return (
        <div className="py-8 mx-4 ">
            <div>
                <h2 className="text-2xl text-center font-semibold">All Enrolled Classes</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
                  {
                   
                    allEnrolls.map(enroll => 
                        <Card
                        id="customShadow"
                        imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
                        imgSrc={enroll.image}
                       className='mx-8'
                       key={enroll._id}
                    >
                        <div href="#">
                            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                {enroll.title}
                            </h5>
                            <h5 className="text-sm font-semibold tracking-tight text-[#696969] my-2 dark:text-white">
                                {enroll.name}
                            </h5>
                            <p>{enroll.short_description}</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <Link to={`/dashboard/myenroll-class/${enroll._id}`}><button className="bg-[#FE325Bed] px-6 py-2 rounded-md text-[white] hover:bg-[#fc0939]">Continue</button></Link>
                        </div>
                    </Card>)
                  }
            </div>
        </div>
    );
};

export default MyEnrolls;