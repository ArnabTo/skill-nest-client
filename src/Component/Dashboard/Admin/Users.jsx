import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import { Avatar, Table } from 'flowbite-react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import toast, { Toaster } from 'react-hot-toast';
const Users = () => {
    const axiosSecure = useAxiosSecure();

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data
        }
    })
    const handleMakeAdmin = (user) => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                console.log(res.data)
                if(res.data.modifiedCount > 0){
                   toast.success('User role is updated!')
                }
                refetch();
            })
    }
    return (
        <div className="overflow-x-auto my-8">
            <h2 className='text-2l text-center'>All Users</h2>
            <Table hoverable>
                <Table.Head>
                    <Table.HeadCell className="p-4">
                        #
                    </Table.HeadCell>
                    <Table.HeadCell>Image</Table.HeadCell>
                    <Table.HeadCell>Name</Table.HeadCell>
                    <Table.HeadCell>Email</Table.HeadCell>
                    <Table.HeadCell>Id</Table.HeadCell>
                    <Table.HeadCell>
                        Action
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {
                        users.map((user, index) =>
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={user._id}>
                                <Table.Cell className="p-4">
                                    {index + 1}
                                </Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    <Avatar img={user.image} alt="avatar of Jese" rounded />
                                </Table.Cell>
                                <Table.Cell>{user.name}</Table.Cell>
                                <Table.Cell>{user.email}</Table.Cell>
                                <Table.Cell>{user._id}</Table.Cell>
                                <Table.Cell>
                                    {
                                        user.role == 'admin' ? 'admin' : <button onClick={() => handleMakeAdmin(user)} className="btn bg-[#FE325B] px-4 py-2 hover:bg-[#fc0939] rounded text-white">Make Admin</button>
                                    }
                                </Table.Cell>
                            </Table.Row>)
                    }
                </Table.Body>
            </Table>
            <Toaster
            position="top-center"
            reverseOrder={false}
        />
        </div>
    );
};

export default Users;