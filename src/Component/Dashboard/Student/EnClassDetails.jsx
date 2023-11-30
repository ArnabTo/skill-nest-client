
import { Rating } from '@smastrom/react-rating';
import { Button, Label, Modal, Textarea, TextInput } from 'flowbite-react';
import { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { AuthContext } from '../../../Provider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';

const EnClassDetails = () => {
  const {id} = useParams();
  const axiosSecure = useAxiosSecure();
  const {user} = useContext(AuthContext)
  const [rating, setRating] = useState(0);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {

    // console.log(data, rating);

    const feedBackInfo = {
      name: user.displayName,
      image: user.photoURL,
      feedback: data.feedback,
      classId: id,
      rating: rating
    }
    // console.log(feedBackInfo)
    axiosSecure.post('/feedback', feedBackInfo)
    .then(res=>{
      if(res.data.message === 'succeed'){
           toast.success('Thank you for your feedback!')
      }
    })
  }
  const StarDrawing = (
    <path
      d="M398.799,141.794c-43.394-3.977-86.776-6.52-130.158-8.418C258.835,99.302,242.633-4.751,193.173,0.169
        c-39.659,3.944-61.012,90.515-73.08,130.306c-32.333,0.283-64.692,1.062-97.09,2.416c-14.735,0.615-27.908,17.9-18.207,31.732
        c19.157,27.316,44.198,49.389,70.487,70.103c-11.83,38.196-21.665,77.499-29.759,116.53c-3.504,16.91-5.31,32.212,3.881,44.82
        c2.411,9.987,12.018,18.494,22.429,18.029c51.805-2.313,93.872-44.738,133.991-77.119c33.156,26.317,66.309,52.64,99.475,78.951
        c12.835,10.183,37.057,5.178,35.798-14.828c-3.039-48.158-15.477-96.473-30.599-144.041c32.951-25.229,65.899-50.459,99.11-75.353
        C426.818,168.817,420.858,143.814,398.799,141.794z"
    />
  );
  const customStyles = {
    itemShapes: StarDrawing,
    activeFillColor: '#FE325B',
    inactiveFillColor: '#f7bbbb',
  };

  return (
    <div className='max-w-4xl mx-auto my-14'>
      <div>
        <h2 className='text-2xl font-bold text-center my-4'>FeedBack</h2>
      </div>
      <div className='flex flex-col md:flex-row items-center'>
        <div className='flex-1'>
          <form onSubmit={handleSubmit(onSubmit)} className="flex max-w-md flex-col gap-4">
            <div className="max-w-md">
              <div className="mb-2 block">
                <Label htmlFor="feedback" value="Your Feedback" />
              </div>
              <Textarea id="feedback" {...register('feedback')} placeholder="Leave a feedback..." required rows={4} />
            </div>
            <div>
              <Rating
                style={{ maxWidth: 300 }}
                value={rating}
                onChange={setRating}
                itemStyles={customStyles}
              />
            </div>
            <button type="submit" className='bg-[#FE325B] text-white py-3 rounded'>Submit</button>
          </form>
        </div>
        <div><img id='floating' className='max-w-sm' src='https://i.ibb.co/FhQznnf/undraw-Feedback-re-urmj.png' /></div>
      </div>
      <Toaster
      position="top-center"
      reverseOrder={false}
  />
    </div>
  );
};

export default EnClassDetails;