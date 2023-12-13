import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import { useContext} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Logo from '../../../assets/logo2.png'
import { AuthContext } from '../../../Provider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
import { useTheme } from '../../../ThemeContext';
import { SunMoon, Sun } from 'lucide-react';
const Nav = () => {

  const { darkMode, toggleDarkMode } = useTheme();
  const { user, logOut } = useContext(AuthContext);

  const navigate = useNavigate();
  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success('Loged Out!')
        navigate('/')
      })
  }

  return (
    <Navbar fluid rounded  style={{ background: darkMode ? '#252525' : '#fff', color: darkMode ? 'white' : 'red' }}>
      <Navbar.Brand href="/">
        <img src={Logo} className="mr-3 h-12" alt="Flowbite React Logo" />
      </Navbar.Brand>
      <div className="flex md:order-2 ">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            user &&
            <Avatar alt="User settings" img={user.photoURL} rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm pointer-events-none">{user?.displayName}</span>
            <span className="block truncate text-sm font-medium pointer-events-none">{user?.email}</span>
          </Dropdown.Header>
          <Dropdown.Item>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item><button onClick={handleLogOut}>Sign out</button></Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className='md:mr-24'>
        <Navbar.Link>
          <NavLink to='/' className='text-[#252525] hover:text-[#FE325B]' style={{color: darkMode ? '#FE3258' : '#252525' }}>Home</NavLink>
        </Navbar.Link>
        <Navbar.Link><NavLink to='/allclasses' className=' text-[#252525] hover:text-[#FE325B]' style={{color: darkMode ? '#FE3258' : '#252525' }}>All Classesse</NavLink></Navbar.Link>
        <Navbar.Link><NavLink to='/teachon' className='text-[#252525] hover:text-[#FE325B]' style={{color: darkMode ? '#FE3258' : '#252525' }}>Teach on SkillNest</NavLink></Navbar.Link>
        {
          user ? <button onClick={handleLogOut}>Sign out</button> : <NavLink to='/signin'><button className="bg-[#FE3258] md:bg-transparent text-white md:text-[#252525] p-2 md:p-0 rounded md:rounded-none hover:text-[#FE325B] active:text-[#FE325B]" >Sign In</button></NavLink>
        }
        <button onClick={toggleDarkMode}>
        {darkMode ? <Sun /> : <SunMoon/>}
      </button>
      </Navbar.Collapse>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </Navbar>
  );
};

export default Nav;