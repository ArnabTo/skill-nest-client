import { Avatar, Blockquote } from 'flowbite-react';
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import BeatLoader from "react-spinners/BeatLoader";
import { css } from "@emotion/react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../App.css'
import { Pagination, Navigation } from 'swiper/modules';
const Feedback = () => {
    const [loader, setLoader] = useState(true);
    const [reviews, setReviews] = useState();
    const axioxPublic = useAxiosPublic();

    useEffect(() => {
        const fechFeedBackData = async () => {
            try {
                const res = await axioxPublic.get('/feedback')
                setReviews(res.data)
                setLoader(false)
            } catch (error) {
               return('Error from feedback', error)
            }
        }
        fechFeedBackData();
    }, [axioxPublic])


    //spiner settings
    const override = css`
    display: block;
    margin: 1rem 2rem;
    border-color: red;
  `;

    return (
        <section className="bg-gray-50 my-12 rounded">
            <div
                className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:me-0 rounded "
            >
                <div
                    className="flex flex-col justify-center rounded"
                >
                    <div className="text-center m-8">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Student Feedback
                        </h2>
                        <p className="mt-4 text-gray-700">
                            We value your feedback! Share your thoughts on classes, instructors, or any
                            aspect of your academic experience. Your insights help us improve
                            and create a better learning environment for everyone
                            at <span className="font-bold text-[#FE325B]">SkillNest</span>.
                        </p>
                    </div>

                    <Swiper 
                      lazy={true}
                      pagination={{
                        clickable: true,
                      }}
                      navigation={true}
                      modules={[Pagination, Navigation]}
                      className="mySwiper"
                    >
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
                                reviews.map(rev => (
                                    <SwiperSlide key={rev._id}>
                                        <figure className="mx-auto max-w-screen-md text-center  my-12">
                                            <svg
                                                className="mx-auto mb-3 h-10 w-10 text-gray-400 dark:text-gray-600"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 18 14"
                                            >
                                                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                                            </svg>
                                            <Blockquote>
                                                <p className="text-2xl font-medium italic text-gray-900 dark:text-white">
                                                    "{rev.feedback}"
                                                </p>
                                            </Blockquote>
                                            <figcaption className="mt-6 flex items-center justify-center space-x-3">
                                                <Avatar className="avatar max-w-[2rem]" rounded size="sm" img={rev.image} alt="profile picture" />
                                                <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                                                    <cite className="pr-3 font-medium text-gray-900 dark:text-white">{rev.name}</cite>
                                                    <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">Studets</cite>
                                                </div>
                                            </figcaption>
                                        </figure>
                                    </SwiperSlide>
                                )
                                )

                        }

                    </Swiper>

                </div>
            </div>
        </section>
    );
};

export default Feedback;



//  <div ref={sliderRef} className="keen-slider">
// {
//     loader ? <div className="flex justify-center items-center">
//         <BeatLoader
//             color={'#FE325B'}
//             loading={loader}
//             css={override}
//             size={20}
//             aria-label="Loading Spinner"
//             data-testid="loader"
//         /> </div>
//         :
//         reviews.map(rev =>
//             <div className="keen-slider__slide number-slide1" key={rev._id}>
//                 <figure className="mx-auto max-w-screen-md text-center">
//                     <svg
//                         className="mx-auto mb-3 h-10 w-10 text-gray-400 dark:text-gray-600"
//                         aria-hidden="true"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="currentColor"
//                         viewBox="0 0 18 14"
//                     >
//                         <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
//                     </svg>
//                     <Blockquote>
//                         <p className="text-2xl font-medium italic text-gray-900 dark:text-white">
//                             "{rev.feedback}"
//                         </p>
//                     </Blockquote>
//                     <figcaption className="mt-6 flex items-center justify-center space-x-3">
//                         <Avatar rounded size="xs" img={rev.image} alt="profile picture" />
//                         <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
//                             <cite className="pr-3 font-medium text-[#FE325B] dark:text-white">{rev.name}</cite>
//                             <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">Student</cite>
//                         </div>
//                     </figcaption>
//                 </figure>

//             </div>)
// }
// </div>