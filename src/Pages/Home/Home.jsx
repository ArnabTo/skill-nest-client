import FeaturedClass from "../../Component/FeaturedClasses/FeaturedClass";
import Hero from "../../Component/Hero/Hero";
import Partners from "../../Component/Partners/Partners";

const Home = () => {
    return (
        <div>
            <Hero />
            <Partners />
            <FeaturedClass></FeaturedClass>
        </div>
    );
};

export default Home;