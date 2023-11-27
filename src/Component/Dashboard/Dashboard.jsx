import { useContext } from "react";
import { FaBookReader, FaUsers, FaHome  } from "react-icons/fa";
import { FaUserLarge   } from "react-icons/fa6";
import { FaCodePullRequest } from "react-icons/fa6";
import { NavLink, Outlet } from 'react-router-dom';
import useAdmin from "../../hooks/useAdmin";
import { AuthContext } from "../../Provider/AuthProvider";
const Dashboard = () => {
    const {user} = useContext(AuthContext);
    console.log(user)
    const [isAdmin] = useAdmin();
    console.log(isAdmin)
    return (
        <div className='flex flex-col md:flex-row'>
            <div className="flex h-screen flex-col justify-between border-e bg-white">
                <div className="px-4 py-6">
                    <span
                        className="grid h-10 w-32 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600"
                    >
                        Logo
                    </span>
                    
                    {
                        isAdmin && (
                            <ul className="mt-6 space-y-1">
                            <li>
                                <NavLink
                                    to='/dashboard/profile'
                                    className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
                                >
                                   <div className='flex justify-start items-center text-lg'><FaUserLarge className='mr-2' />Profile</div>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/dashboard/allclasses'
                                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                >
                                <div className='flex justify-start items-center text-lg'><FaBookReader  className='mr-2' />All Classes</div>
                                </NavLink>
                            </li>
    
                            <li>
                                <NavLink
                                    to='/dashboard/request'
                                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                >
                                <div className='flex justify-start items-center text-lg'><FaCodePullRequest  className='mr-2' />Teacher Requests</div>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/dashboard/users'
                                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                >
                                <div className='flex justify-start items-center text-lg'><FaUsers className='mr-2' />Users</div>
                                </NavLink>
                            </li>
                        </ul>
                        )
                  
                    }
               
                        <hr/>
                    <ul className="mt-6 space-y-1">
                    <li>
                        <NavLink
                            to='/'
                            className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
                        >
                           <div className='flex justify-start items-center text-lg'><FaHome  className='mr-2' />Home</div>
                        </NavLink>
                    </li>
                </ul>
                </div>

                <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
                    <a href="#" className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50">
                        <img
                            alt="Man"
                            src={user?.photoURL}
                            className="h-10 w-10 rounded-full object-cover"
                        />

                        <div>
                            <p className="text-xs">
                                <strong className="block font-medium">{user?.displayName}</strong>

                                <span> {user?.email} </span>
                            </p>
                        </div>
                    </a>
                </div>
            </div>
            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;