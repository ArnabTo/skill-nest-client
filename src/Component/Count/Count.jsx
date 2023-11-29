import { useEffect, useState } from 'react';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import useClasses from '../../hooks/useClasses';
import { CountUp } from 'use-count-up'


const Count = () => {
    const [allclasses] = useClasses();
    const axiosPublic = useAxiosPublic();
    const totalEnrollment = allclasses.reduce((acc, classData) => acc + classData.total_enrollment, 0);
    const [userCount, setUserCount] = useState();
    useEffect(() => {
        axiosPublic.get('/users')
            .then(res => setUserCount(res.data.length))
    },)
    return (
        <div className='flex flex-col lg:flex-row'>
            <section className="bg-white" data-aos="fade-right">
                <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                            Explore the impact of our platform with these key statistics.
                        </h2>

                        <p className="mt-4 text-gray-500 sm:text-xl">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolores
                            laborum labore provident impedit esse recusandae facere libero harum
                            sequi.
                        </p>
                    </div>

                    <div className="mt-8 sm:mt-12">
                        <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                            <div className="flex flex-col rounded-lg bg-blue-100 px-4 py-8 text-center" data-aos="flip-up">
                                <dt className="order-last text-lg font-medium text-gray-500">
                                    Total User
                                </dt>

                                <dd className="text-4xl font-extrabold text-[#FE325B] md:text-5xl">
                                    <CountUp isCounting end={userCount} duration={10} />
                                </dd>
                            </div>

                            <div className="flex flex-col rounded-lg bg-blue-100 px-4 py-8 text-center" data-aos="flip-up">
                                <dt className="order-last text-lg font-medium text-gray-500">
                                    Total Classes
                                </dt>
                                {
                                    totalEnrollment && <dd className="text-4xl font-extrabold text-[#FE325B] md:text-5xl" data-aos="flip-up">
                                        <CountUp isCounting end={allclasses.length} duration={10} />
                                    </dd>
                                }

                            </div>

                            <div className="flex flex-col rounded-lg bg-blue-100 px-4 py-8 text-center" data-aos="flip-up">
                                <dt className="order-last text-lg font-medium text-gray-500">
                                    Total Enrollments
                                </dt>
                                {
                                    allclasses &&
                                    <dd className="text-4xl font-extrabold text-[#FE325B] md:text-5xl">
                                        <CountUp isCounting end={totalEnrollment} duration={10} />

                                    </dd>
                                }
                            </div>
                        </dl>
                    </div>
                </div>
            </section>
            <div data-aos="fade-right">
                <img id='floating' src='https://i.ibb.co/dghvGmw/undraw-Statistics-re-kox4.png' />
            </div>
        </div>
    );
};

export default Count;
