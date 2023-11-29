import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { AuthContext } from '../../../Provider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
const AddClass = () => {
    const {user} = useContext(AuthContext);
    const [userData, setUserData] = useState();
    const axiosSecure = useAxiosSecure();
    const { register, handleSubmit, formState: { errors }, } = useForm();
    // console.log(user)

    useEffect(()=>{
        axiosSecure.get(`/user/${user.email}`)
        .then(res=>{
            setUserData(res.data)
        })
    })
    const onSubmit = (data) => {
        // console.log(data)
        const classInfo = {
            title:data.title,
            name: data.name,
            email: data.email,
            price: data.price,
            discription:data.discription,
            image: data.photo,
            userId: userData._id,
            total_enrollment: 0,
            status: 'Pending'
        }
        // console.log(userData)
        axiosSecure.post('/classes', classInfo)
        .then(res => {
            console.log(res)
            if(res.data.message === 'succeed'){
               toast.success('Class is added to review!')
            }
        })
    }

    return (
        <section>
            <h2 className='text-2xl text-center font-semibold my-8'>All Class</h2>
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                    <div className="rounded-lg bg-white p-8 lg:col-span-3 lg:p-12" id='customShadow'>
                        <p>Fill Class Details Here</p>
                        <form  onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                            <div>
                                <label className="sr-only" htmlFor="name">Title</label>
                                <input
                                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    placeholder="Title"
                                    type="text"
                                    id="name"
                                    {...register('title')}
                                />
                            </div>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label className="sr-only" htmlFor="email">Name</label>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="name"
                                        type="text"
                                        id="name"
                                        defaultValue={user?.displayName || ''}
                                        {...register('name')}
                                        readOnly
                                    />
                                </div>

                                <div>
                                    <label className="sr-only" htmlFor="phone">Email</label>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Email"
                                        type="email"
                                        id="email"
                                        defaultValue={user?.email || ''}
                                        {...register('email')}
                                        readOnly
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-2">
                                <div>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Price"
                                        type="number"
                                        id="price"
                                        {...register('price')}
                                    />
                                </div>
                                <div>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="photoURL"
                                        type="text"
                                        id="photoUrl"
                                        {...register('photo')}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="sr-only" htmlFor="message">Description</label>
                                <textarea
                                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    placeholder="Message"
                                    rows="8"
                                    id="message"
                                    {...register('discription')}
                                ></textarea>
                            </div>

                            <div className="mt-4">
                                <button
                                    type="submit"
                                    className="inline-block w-full rounded-lg bg-[#fc0939] px-5 py-3 font-medium text-white sm:w-auto"
                                >
                                    Add Class
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="lg:col-span-2 lg:py-12">
                        <img id='floating' src='https://i.ibb.co/kJYF01k/undraw-Add-post-re-174w-1.png' />
                    </div>
                </div>
            </div>
            <Toaster
            position="top-center"
            reverseOrder={false}
        />
        </section>
    );
};

export default AddClass;