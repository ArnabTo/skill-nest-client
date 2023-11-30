import { useEffect } from "react";
import { useParams } from "react-router";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const EnClassDetails = () => {
  const {id} = useParams();
  console.log(id)
  const axiosSecure = useAxiosSecure();

  useEffect(()=>{
     axiosSecure.get(`/assignment/${id}`)
     .then(res=>{
      console.log(res.data)
     })
  },[])

  return (
    <div>
      
    </div>
  );
};

export default EnClassDetails;