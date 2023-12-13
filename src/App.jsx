import { Outlet } from "react-router-dom";
import Nav from "./Component/Shared/Navbar/Nav";
import PageTitle from "./PageTitle";
import Foooter from "./Component/Footer/Footer";
import { useTheme } from "./ThemeContext";
const App = () => {
  const { darkMode } = useTheme();
  return (
    <div className="max-w-screen-xl mx-auto"
    style={{ background: darkMode ? '#252525' : '#fff', color: darkMode ? '#fff' : '#333' }}>

      <PageTitle title={'SkillNest | Home'}></PageTitle>
      <Nav></Nav>
      <Outlet ></Outlet>
      <Foooter></Foooter>
    </div>
  );
};

export default App;