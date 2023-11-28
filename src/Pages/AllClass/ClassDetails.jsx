import { Link, useLoaderData } from "react-router-dom";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { FileVideo, Newspaper, MonitorSmartphone, Infinity, Medal } from "lucide-react";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";
const ClassDetails = () => {
  const {user} = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const classData = useLoaderData();
  console.log(classData)

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
    activeFillColor: '#fc0939',
    inactiveFillColor: '#ffb6c5',
  };

  const handlePayment=(classData)=>{
       if(user){
        const classCart = {
          email: user.email,
          price: classData.price,
          classTitle: classData.title,
          classId: classData._id,
        }
        axiosSecure.post('/classcart', classCart)
        .then(res=>{
          console.log(res.data)
        })
       }

  }
  return (
    <section>
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
        <header className="text-center">
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
            Details
          </h2>
        </header>
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-4 h-full">
          <div className="mt-12 bg-[#252525] text-white rounded px-4 py-6 flex-1 h-[35rem]">
            <h2 className="text-2xl font-extrabold my-8">{classData.title}<br />
              <p className="text-lg text-[#FE325B] mb-2">From: {classData.name}</p>
              <Rating
                style={{ maxWidth: 120 }}
                value={Math.floor(classData.rating)}
                itemStyles={customStyles}
              />
              <span className="text-sm">Total Enrollments: {classData.total_enrollment}</span><br/>
            </h2>
            <p>{classData.short_description}</p>
          </div>
          <div className="flex flex-col w-[100%] md:w-auto">
            <img className="max-w-sm rounded" src={classData.image} />
            <div className="px-4 py-6 border-[1px]">
            <div className="text-2xl font-extrabold my-4 bg-[#FE325B] text-white py-2 px-4 rounded">Price: {classData.price}$</div>
              <ul>
                <li className="text-lg font-semibold mb-2 flex gap-2"><FileVideo color="#FE325B" /> 10 hours of class video</li>
                <li className="text-lg font-semibold mb-2 flex gap-2"><Newspaper color="#FE325B" />20 articles</li>
                <li className="text-lg font-semibold mb-2 flex gap-2"><MonitorSmartphone color="#FE325B" />From any device</li>
                <li className="text-lg font-semibold mb-2 flex gap-2"><Infinity color="#FE325B" />Life Time Access</li>
                <li className="text-lg font-semibold mb-2 flex gap-2"><Medal color="#FE325B" />Certificate on completion</li>
                <li className="text-lg font-semibold mb-2 text-gray-500">#programming, #development</li>
                <li><Link to='/payment'><button id="customBtnCss" onClick={()=>handlePayment(classData)} className="btn bg-[#FE325B] w-full py-4 text-xl text-white font-semibold rounded">Pay</button></Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClassDetails;