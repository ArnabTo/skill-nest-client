import { NavLink } from "react-router-dom";
import { useTheme } from "@emotion/react";
const Bteacher = () => {
    const { darkMode } = useTheme();
    return (
        <div className="flex flex-col md:flex-row">
            <div className=" rounded-lg flex-1" data-aos="fade-up">
                <img id="floating" src="https://i.ibb.co/FD8V42K/undraw-Educator-re-ju47-1.png" />
            </div>
            <div className=" rounded-lg  flex flex-col justify-center px-4 gap-4 flex-1" data-aos="fade-up">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: darkMode ? 'white' : '#111827' }}>
                Unlock Your Potential: Join Our Team of Dedicated Educators!
                </h2>
                <p className="mt-4" style={{ color: darkMode ? 'white' : '#374151' }}>
                Passionate about teaching? Join us at 
               <span>SkillNest</span> and be a part of our 
                dedicated team of educators. Make a lasting impact on 
                young minds, foster a love for learning, and contribute
                 to the growth of each student. We value innovation, 
                 collaboration, and excellence in education. Apply now
                  and inspire the future with us!
                </p>
              <NavLink to='/teachon'><button className="btn bg-[#FE325B] hover:bg-[#fc0939] py-2 rounded-md text-white w-1/2">Join as teacher</button></NavLink>  
            </div>
        </div>
    );
};

export default Bteacher;
