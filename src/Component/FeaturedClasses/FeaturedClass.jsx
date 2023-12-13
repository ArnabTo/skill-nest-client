import FeaturedClasses from "./FeaturedClasses";
import { Card, Badge } from 'flowbite-react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import '../../App.css'
import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";
import { useEffect, useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import { css } from "@emotion/react";
import { useTheme } from "../../ThemeContext";

const FeaturedClass = () => {
  const { darkMode } = useTheme();
  const [loader, setLoader] = useState(true);
  const [featuredClasses] = FeaturedClasses();

 
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

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
    if (featuredClasses && Slider) {
      setLoader(false);
    }
  }, [featuredClasses]);

  return (
    <div className="my-12">
      <div className="text-center m-8" data-aos="zoom-in-up">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl" style={{ color: darkMode ? 'white' : '#111827' }}>
          Our Featured Classes
        </h2>
        <p className="mt-4 text-gray-700" style={{ color: darkMode ? 'white' : '#374151' }}>
          Unlock Your Potential: Dive into Top-Rated and In-Demand Classes!
        </p>
      </div>
      <Slider {...settings}>
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
              />
            </div>
            :

            featuredClasses.map(fClass =>
              <div key={fClass._id} data-aos="zoom-in" >
                <Card
                  className="max-w-sm "
                  imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
                  imgSrc={fClass.image}
                  key={fClass._id}
                  style={{ background: darkMode ? '#252525' : '#fff', color: darkMode ? 'white' : 'red' }}
                >
                  <div>
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white" style={{ color: darkMode ? 'white' : '#252525' }}>
                      {fClass.title}
                    </h5>
                    <h5 className="text-sm font-semibold tracking-tight text-[#696969] my-2 dark:text-white">
                      {fClass.name}
                    </h5>
                  </div>
                  <div className="flex items-center">
                  <Rating
                  style={{ maxWidth: 300 }}
                  value={Math.floor(fClass.rating)}
                  itemStyles={customStyles}
                />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-[#696969] dark:text-white" style={{ color: darkMode ? 'white' : '#696969' }}>{fClass.price}$</span>
                    <Badge color="success">Bestseller</Badge>
                  </div>
                </Card>
              </div>)
        }
        <div>

        </div>

      </Slider>
    </div>
  );
};

export default FeaturedClass;