
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
 
    


    </div>
  );
};

export default EnClassDetails;