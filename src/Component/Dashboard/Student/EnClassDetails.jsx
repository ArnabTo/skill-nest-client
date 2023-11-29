
import { Rating } from '@smastrom/react-rating';
import { Button, Modal, Textarea, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const EnClassDetails = () => {
  const axiosSecure  = useAxiosSecure();
  const [ratingValue, setRatingValue] = useState(0);
  const { register, handleSubmit, getValues ,formState: { errors } } = useForm();
  const onSubmit = data => {
    data.rating = ratingValue
    console.log(data);
  
    axiosSecure.post('/feedback', data)
  
  }

    
  return (
    <div>
      <Button onClick={() => setOpenModal(true)}>Toggle modal</Button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Terms of Service</Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <Rating 
            onChange={(value) => setRatingValue(value)}
          />
          <div>
              <Textarea id="text" type="text" {...register('desc')} required />
            </div>
            <button type="submit" className='bg-[#FE3258] hover:bg-[#fa0e39] p-3 rounded text-white'>Sign In</button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpenModal(false)}>I accept</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EnClassDetails;