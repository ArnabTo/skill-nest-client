import { Outlet } from "react-router-dom";
import Nav from "./Component/Shared/Navbar/Nav";
import PageTitle from "./PageTitle";
import Foooter from "./Component/Footer/Footer";

const App = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
    <PageTitle title={'SkillNest | Home'}></PageTitle>
       <Nav></Nav>
       <Outlet ></Outlet>
       <Foooter></Foooter>
    </div>
  );
};

export default App;