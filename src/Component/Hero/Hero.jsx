import banner from '../../assets/banner1.png'
import '../../App.css'
import { Link } from 'react-router-dom';
const Hero = () => {
    return (
        <section className="relative mx-4 my-24 lg:my-0" >
        <div className='flex flex-col lg:flex-row justify-center items-center'>
            <div
                className="relative mx-auto max-w-screen-xl px-4 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
            >
                <div className="max-w-lg text-left ltr:sm:text-left rtl:sm:text-right">
                    <h1 className="text-3xl font-extrabold sm:text-5xl text-[#252525]">
                    Elevate Your 

                        <strong className="block font-extrabold text-[#FE325B]">
                        Future Invest in Yourself
                        </strong>
                    </h1>

                    <p className="mt-4 max-w-lg sm:text-xl/relaxed text-[#252525]">
                    Your education is an investment in yourself. Enrolling in a course isn't just a commitment to learning; it's a commitment to your future. The knowledge you gain today will be the foundation for the opportunities of tomorrow.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4 text-center">
                        <Link to='/allclasses'
                            className="block w-full rounded bg-[#FE325B] hover:bg-[#fc0939] px-12 py-3 text-sm font-medium text-white shadow focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                        >
                            Enroll Now
                        </Link>

                        <a
                            href="#"
                            className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-[#FE325B] shadow hover:text-[#FC0939] focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
            <div>
               <img className='hidden md:block max-w-xl' id='floating' src={banner}/>
            </div>
            </div>
        </section>
    );
};

export default Hero;