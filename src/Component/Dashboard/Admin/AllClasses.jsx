import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Table, Avatar } from 'flowbite-react';
import toast from "react-hot-toast";
const AllClasses = () => {
    const axiosSecure = useAxiosSecure();
    const [classData, setClassData] = useState();
    const { user } = useContext(AuthContext)

    useEffect(() => {
        axiosSecure.get('pendingclasses')
            .then(res => setClassData(res.data))
    })

    const handleApprove =(id)=>{
           axiosSecure.patch(`/pendingclasses/${id}`)
           .then(res => {
            if(res.data.message === 'succeed'){
                toast.success('Class was Approved')
            }
        })
    }

    return (
        <div className="mx-4 my-8">
            <Table hoverable>
                <Table.Head>
                    <Table.HeadCell className="p-4">
                        #
                    </Table.HeadCell>
                    <Table.HeadCell>Title</Table.HeadCell>
                    <Table.HeadCell>Image</Table.HeadCell>
                    <Table.HeadCell>Email</Table.HeadCell>
                    <Table.HeadCell>Description</Table.HeadCell>
                    <Table.HeadCell>Status</Table.HeadCell>
                    <Table.HeadCell> Action</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                 {
                    classData && classData.map((cData, index) =>
                        <Table.Row key={cData._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="p-4">{index + 1}</Table.Cell>
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                          {cData.title}</Table.Cell>
                        <Table.Cell><Avatar img={cData.image} alt="avatar of Jese" rounded /></Table.Cell>
                        <Table.Cell>{cData.email}</Table.Cell>
                        <Table.Cell>{cData.discription}</Table.Cell>
                        <Table.Cell>{cData.status}</Table.Cell>
                        <Table.Cell className="flex flex-col gap-2">
                         <button onClick={()=>handleApprove(cData._id)} className="btn bg-[#FE325B] px-3 py-1 text-white rounded">Approve</button>
                         <button className="btn bg-[#252525] px-3 py-1 text-white rounded">Reject</button>
                        </Table.Cell>
                      </Table.Row>)
                 }
                </Table.Body>
            </Table>
        </div>
    );
};

export default AllClasses;