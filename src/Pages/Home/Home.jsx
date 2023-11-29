import Bteacher from "../../Component/BecomeTeacher/Bteacher";
import Count from "../../Component/Count/Count";
import FeaturedClass from "../../Component/FeaturedClasses/FeaturedClass";
import Feedback from "../../Component/FeedBack/Feedback";
import Foooter from "../../Component/Footer/Footer";
import Hero from "../../Component/Hero/Hero";
import Partners from "../../Component/Partners/Partners";

const Home = () => {

    return (
        <div>
            <Hero />
            <Partners />
            <FeaturedClass></FeaturedClass>
            <Feedback></Feedback>
            <Count></Count>
            <Bteacher></Bteacher>
        </div>
    );
};

export default Home;