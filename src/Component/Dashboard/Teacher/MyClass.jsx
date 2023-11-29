import { useContext } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { AuthContext } from '../../../Provider/AuthProvider';
import { useEffect, useState } from 'react';
import { Card } from "flowbite-react";
import BeatLoader from "react-spinners/BeatLoader";
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import Tilt from 'react-parallax-tilt';
import toast, { Toaster } from 'react-hot-toast';
const MyClass = () => {
    const [loader, setLoader] = useState(true)
    const axiosSecure = useAxiosSecure();
    const { user } = useContext(AuthContext)
    const [myClass, setMyClassData] = useState([]);

    useEffect(() => {
        const fetchClass = async () => {
            try {
                const res = await axiosSecure.get(`/classes/${user.email}`)
                // console.log(res.data)
                setMyClassData(res.data)
                setLoader(false)
            } catch (error) {
                console.log(error)
            }
        }
        fetchClass();
    }, [axiosSecure, user?.email])

    const override = css`
      display: block;
      margin: 1rem 2rem;
      border-color: red;
    `;
    const handleDelete = async (id) => {
        const res = await axiosSecure.delete(`/classes/${id}`)
        console.log(res.data)
        if (res.data.message === 'succeed') {
            toast.success('Class was removed')
            setMyClassData((prevClasses) => prevClasses.filter((c) => c._id !== id));
        }

    }
    return (
        <div>
            <div><h2 className='text-center text-2xl font-bold my-12'>My Classes</h2></div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    loader ?
                        <div className="spinnerCss">
                            <BeatLoader
                                color={'#FE325B'}
                                loading={loader}
                                css={override}
                                size={20}
                                aria-label="Loading Spinner"
                                data-testid="loader"
                            /> </div>
                        :
                        myClass.map(myClass =>
                            <Tilt
                                key={myClass._id}>
                                <Card
                                    id="customShadow"
                                    imgAlt="Class Image"
                                    imgSrc={myClass.image}
                                    className='mx-8'
                                >
                                    <div href="#">
                                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                            {myClass.title}
                                        </h5>
                                        <h5 className="text-sm font-semibold tracking-tight text-[#696969] dark:text-white">
                                            {myClass.name}
                                        </h5>
                                        <p>{myClass.email}</p>
                                    </div>
                                    <span className="flex justify-between items-center">
                                        <p>Price: {myClass.price}</p>
                                        <p>Status: <span className='text-[#3df640]'>{myClass.status}</span></p>
                                    </span>
                                    <div>
                                        <p>{myClass.discription}</p>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xl font-bold text-[#696969] dark:text-white">{myClass.price}$</span>
                                      
                                       
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <button onClick={() => handleDelete(myClass._id)} className="bg-[#252525] px-4 py-2 rounded-md text-[white] hover:bg-[#fc0939]">Delete</button>
                                        {
                                            myClass && myClass.status === 'approved' ?
                                            <Link to={`/dashboard/class/${myClass._id}`}><button className="bg-[#FE325Bed] px-6 py-2 rounded-md text-[white] hover:bg-[#fc0939]">Details</button></Link>
                                            :
                                            <button disabled >Details</button>
                                        }
                                        <button className="bg-[#fc0939] px-4 py-2 rounded-md text-[white] hover:bg-[#fc0939]">Update</button>
                                    </div>
                                </Card>
                            </Tilt>
                        )
                }
            </div>
            <Toaster
            position="top-center"
            reverseOrder={false}
        />
        </div>
    );
};

export default MyClass;