import {  Table, Avatar } from 'flowbite-react';
import { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import BeatLoader from "react-spinners/BeatLoader";
import { css } from "@emotion/react";
const TeacherRequests = () => {
    const [tData, setTdata] = useState();
    const axiosSecure = useAxiosSecure();
    const [loader, setLoader] = useState(true)
    useEffect(()=>{
           axiosSecure.get('/teacherrequest')
           .then(res => {
            setTdata(res.data)
            setLoader(false)
           })
    },[axiosSecure])
    // console.log(tData)
    const override = css`
    display: block;
    margin: 1rem 2rem;
    border-color: red;
  `;
  const handleAccept=()=>{

    axiosSecure.patch()

  }
    return (
        <div>
         <h2 className='text-2xl font-semibold text-center my-8'>All Teacher Requests</h2>
            <div>
            <div className="overflow-x-auto">
            <Table hoverable>
              <Table.Head>
                <Table.HeadCell className="p-4">
                  #
                </Table.HeadCell>
                <Table.HeadCell>Name</Table.HeadCell>
                <Table.HeadCell>Image</Table.HeadCell>
                <Table.HeadCell>Experience</Table.HeadCell>
                <Table.HeadCell>Category</Table.HeadCell>
                <Table.HeadCell>Status</Table.HeadCell>
                <Table.HeadCell>
                  Action
                </Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
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
                    tData.map((data, index) =>
                        <Table.Row 
                        className="bg-white dark:border-gray-700 dark:bg-gray-800"
                        key={data._id}
                        >
                        <Table.Cell className="p-4">
                           {index + 1}
                        </Table.Cell>
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                          {data.name}
                        </Table.Cell>
                        <Table.Cell>
                        <Avatar img={data?.image} alt="avatar of Jese" rounded />
                        </Table.Cell>
                        <Table.Cell>{data.experience}</Table.Cell>
                        <Table.Cell>{data.category}</Table.Cell>
                        <Table.Cell>{data.status}</Table.Cell>
                        <Table.Cell>
                         <button onClick={handleAccept} className='btn bg-[#FE325B] px-4 py-2 rounded text-white mx-2'>Accept</button>
                         <button className='btn bg-[#FE325B] px-4 py-2 rounded text-white'>Reject</button>
                        </Table.Cell>
                      </Table.Row>)
                 }
              </Table.Body>
            </Table>
          </div>
            </div>
        </div>
    );
};

export default TeacherRequests;