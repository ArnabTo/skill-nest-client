import { Card } from "flowbite-react";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { useEffect, useState } from "react";
import useClasses from "../../hooks/useClasses";
import BeatLoader from "react-spinners/BeatLoader";
import { css } from "@emotion/react";
import '../../App.css'
import { Link } from "react-router-dom";
import Tilt from 'react-parallax-tilt';
const Classes = () => {
    const [allclasses, refetch] = useClasses();
    // console.log(allclasses)
    const [loader, setLoader] = useState(true)

    const StarDrawing = (
        <path
            d="M398.799,141.794c-43.394-3.977-86.776-6.52-130.158-8.418C258.835,99.302,242.633-4.751,193.173,0.169
            c-39.659,3.944-61.012,90.515-73.08,130.306c-32.333,0.283-64.692,1.062-97.09,2.416c-14.735,0.615-27.908,17.9-18.207,31.732
            c19.157,27.316,44.198,49.389,70.487,70.103c-11.83,38.196-21.665,77.499-29.759,116.53c-3.504,16.91-5.31,32.212,3.881,44.82
            c2.411,9.987,12.018,18.494,22.429,18.029c51.805-2.313,93.872-44.738,133.991-77.119c33.156,26.317,66.309,52.64,99.475,78.951
            c12.835,10.183,37.057,5.178,35.798-14.828c-3.039-48.158-15.477-96.473-30.599-144.041c32.951-25.229,65.899-50.459,99.11-75.353
            C426.818,168.817,420.858,143.814,398.799,141.794z"
        />
    );

    const customStyles = {
        itemShapes: StarDrawing,
        activeFillColor: '#fc0939',
        inactiveFillColor: '#ffb6c5',
    };

    const override = css`
      display: block;
      margin: 1rem 2rem;
      border-color: red;
    `;
    useEffect(() => {
        if (allclasses) {
            refetch();
            setLoader(false);
        }
    }, [allclasses, refetch])

    return (
        <div className="my-12">
            <div className="text-center m-8">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Our Featured Classes
                </h2>
                <p className="mt-4 text-gray-700">
                    Unlock Your Potential: Dive into Top-Rated and In-Demand Classes!
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
                        allclasses.map(allc =>
                            <Tilt
                                key={allc._id}>
                                <Card
                                    id="customShadow"
                                    imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
                                    imgSrc={allc.image}
                                   className='mx-8'
                                >
                                    <div href="#">
                                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                            {allc.title}
                                        </h5>
                                        <h5 className="text-sm font-semibold tracking-tight text-[#696969] my-2 dark:text-white">
                                            {allc.name}
                                        </h5>
                                        <p>{allc.short_description}</p>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <Rating
                                            style={{ maxWidth: 120 }}
                                            value={Math.floor(allc.rating)}
                                            itemStyles={customStyles}
                                        />
                                        <p>Total Enroll: {allc.total_enrollment}</p>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xl font-bold text-[#696969] dark:text-white">{allc.price}$</span>
                                        <Link to={`/details/${allc._id}`}><button className="bg-[#FE325Bed] px-6 py-2 rounded-md text-[white] hover:bg-[#fc0939]">Enroll Now</button></Link>
                                    </div>
                                </Card>
                            </Tilt>
                        )
                }
            </div>
        </div>
    );
};

export default Classes;