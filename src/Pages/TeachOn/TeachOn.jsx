
import { Label, Select, TextInput } from 'flowbite-react';
import { useForm } from "react-hook-form"
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import toast, { Toaster } from 'react-hot-toast';
const TeachOn = () => {
  const { user } = useContext(AuthContext);
  // const [loader, setLoader] = useState(true)
  const [teReq, setReqData] = useState();
  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    // console.log(data)

    const teacherInfo = {
      name: data.name,
      email: user?.email,
      photo: user?.photoURL,
      experience: data.experience,
      category: data.category,
      status: 'pending'
    }

    axiosSecure.post('/teacherrequest', teacherInfo)
      .then(res => {
        console.log(res.data)
        if (res.data.message == 'succeed') {
          toast.success('Your request was sent to admin.')
        }
      }).catch(errors); {
      console.log(errors)
    }
    axiosSecure.get('/teacherrequest')
      .then(res => {
        console.log(res.data)
      }).catch(errors); {
      console.log(errors)
    }
  }
  useEffect(() => {
     axiosSecure.get(`/teacherrequest/${user.email}`)
     .then(res =>{
      setReqData(res.data)
     })
  },[axiosSecure])
  console.log(teReq)
  return (
    <div className='my-8'>
      <div className='text-center'>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Join Our Teaching Team
        </h2>
        <p className="mt-4 mb-6 text-gray-700 w-4/5 mx-auto">
          Passionate about education? Apply to become a teacher and inspire the next generation. Whether you're an expert in a subject or bring a unique teaching approach, we invite you to shape the future with us. Join our community dedicated to fostering a rich learning environment. Apply now to be a part of our journey in educational excellence!
        </p>
      </div>
      <div className='w-1/2 mx-auto'>

        <form onSubmit={handleSubmit(onSubmit)} className="flex max-w-md flex-col gap-4 m-auto" data-aos="fade-right">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="name" value="Name" />
            </div>
            <TextInput id="name" type="text" {...register('name')} placeholder="Name" required shadow />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password2" value="Image" />
            </div>
            <TextInput id="name" type="text" defaultValue={user?.photoURL || ''}  {...register('photo')} required shadow readOnly />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="experience" value="Experience" />
            </div>
            <Select {...register("experience")} id="countries" required>
              <option>Select One</option>
              <option value='beginner'>Beginner</option>
              <option value='experienced'>Experienced</option>
              <option value='master'>Master</option>
            </Select>
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="Category" value="Category" />
            </div>
            <Select {...register("category")} id="countries" required>
              <option>Select One</option>
              <option value='webdevelopment'>Web development</option>
              <option value='digitalmarketing'>digital marketing</option>
              <option value='datascience'>Data Science</option>
              <option value='photography'>Photography Masterclass</option>
              <option value='amazonaws'>Amazon AWS</option>
              <option value='others'>others</option>
            </Select>
          </div>
       {
        teReq?.status === 'pending' ?
        (<div className='w-full'>
          <button type="submit"  className='bg-[#FE325B] w-full py-3 rounded text-white' disabled>Submit For Review</button>
        <p className='text-center text-green-400'>Your Request is in Pending</p>
          </div>
        )
        : 
        <button type="submit" className='bg-[#FE325B] py-3 rounded text-white'>Request to Another</button>
       }

        </form>
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
      </div>
    </div>
  );
};

export default TeachOn;