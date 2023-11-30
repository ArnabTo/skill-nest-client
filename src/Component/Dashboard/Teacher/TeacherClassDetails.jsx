import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useClasses from '../../../hooks/useClasses';
import { Label, Textarea, TextInput } from 'flowbite-react';
import DatePicker from "react-datepicker";
import '../../../../node_modules/react-datepicker/dist/react-datepicker.css'
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import toast, { Toaster } from 'react-hot-toast';
import { PlusCircle } from 'lucide-react';

const TeacherClassDetails = () => {
  const axiosSecure = useAxiosSecure();
  const [loader, setLoader] = useState(true);
  const [classDetails, setClassDetails] = useState();
  const { id } = useParams();
  // console.log(id)
  const [allclasses] = useClasses();
  const [startDate, setStartDate] = useState(new Date());
  const [totalAssignmentNumber, setTotalAssinmentNumber] = useState(0);
  const classDetail = allclasses.find(sClass => sClass._id === id)
  // console.log(classDetails)
  useEffect(() => {
    if (classDetail) {
      setClassDetails(classDetail)
      setLoader(false)
    }
  }, [classDetail])


  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;

    const options = { year: '2-digit', month: '2-digit', day: '2-digit' };
    const dateInformate = startDate.toLocaleDateString('en-US', options)

    // console.log(title, description, dateInformate)
    const assignmentInfo = {
      title: title,
      deadline: dateInformate,
      description: description,
      classId: id
    }
    axiosSecure.post('/assignment', assignmentInfo)
      .then(res => {
        if (res.data.message === 'succeed')
          toast.success('Assingment Created')
        document.getElementById('my_modal_1').close();
      })
  }
  useEffect(() => {
    axiosSecure.get('/assignment')
      .then(res => {
        setTotalAssinmentNumber(res.data.length)
      })
  }, [axiosSecure, setTotalAssinmentNumber])

  const handleClose=()=>{
            document.getElementById('my_modal_1').close();
  }
  return (
    <div>
      <div>
        <h2 className='text-center text-2xl font-bold my-8'>Class Progress</h2>
        <div className='flex flex-col lg:flex-row justify-center my-8 w-full'>
          <div className='w-[20rem] h-[10rem] bg-[#252525] border-r-white border-[2px] text-white rounded-md'>
            <h2 className='text-3xl text-center font-extrabold text-[#FE325B] mt-8'>
              {
                loader ?
                  <div>loading</div>
                  :
                  <span>{classDetails.total_enrollment}</span>
              }
            </h2>
            <h3 className='text-xl text-center font-bold'> Total Enrollment</h3>
          </div>
          <div className='w-[20rem] h-[10rem] bg-[#252525] border-r-white border-[2px] text-white rounded-md'>
            <h2 className='text-3xl text-center font-extrabold text-[#FE325B] mt-8'>{totalAssignmentNumber}</h2>
            <h3 className='text-2xl text-center font-bold'>Total Assignment</h3>
          </div>
          <div className='w-[20rem] h-[10rem] bg-[#252525] border-r-white border-[2px] text-white rounded-md'>
            <h2 className='text-3xl text-center font-extrabold text-[#FE325B] mt-8'></h2>
            <h3 className='text-2xl text-center font-bold'>Per Day Assignment</h3>
          </div>
        </div>
      </div>
      <div>
        <h2 className='text-center text-2xl font-bold mb-12'>Add Assignment</h2>
        <div className='flex flex-col-reverse justify-center items-center'>
          <div>
            <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>
              <PlusCircle />
              Create</button>
            <dialog id="my_modal_1" className="modal">
              <div className="modal-box">
                <div className="modal-action justify-center">
                  <form onSubmit={handleSubmit} method="dialog" className='w-[25rem]'>
                    <div className='mb-2'>
                      <div className="mb-2 block">
                        <Label htmlFor="title" value="Title" />
                      </div>
                      <TextInput id="title" type="text" name='title' placeholder="Assignment title" required />
                    </div>
                    <div className='mb-2'>
                      <div className="mb-2 block">
                        <Label htmlFor="date" value="Deadline" />
                      </div>
                      <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                    </div>
                    <div className="max-w-md">
                      <div className="mb-2 block">
                        <Label htmlFor="comment" value="Description" />
                      </div>
                      <Textarea id="comment" name='description' placeholder="Assignment details..." required rows={4} />
                    </div>
                    <button type='submit' className="btn bg-[#252525] my-4 text-white">Create <PlusCircle /></button>
                    <button onClick={handleClose} type='btn' className="btn bg-[#252525] my-4 text-white">close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
          <div>
           <img className='max-w-md' src='https://i.ibb.co/p21s71Q/undraw-Add-tasks-re-s5yj.png'/>
          </div>
        </div>
      </div>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </div>
  );
};

export default TeacherClassDetails;