import { Outlet } from "react-router-dom";
import Nav from "./Component/Shared/Navbar/Nav";
import Home from "./Pages/Home/Home";
import PageTitle from "./PageTitle";


const App = () => {
  return (
    <div>
    <PageTitle title={'SkillNest | Home'}></PageTitle>
       <Nav></Nav>
       <Outlet></Outlet>
    </div>
  );
};

export default App;