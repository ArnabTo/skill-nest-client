import { Footer } from 'flowbite-react';
import flogo from '../../assets/logo2.png'
const Foooter = () => {
  return (
    <div>
    <Footer container>
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Footer.Brand
            href="/"
            src={flogo}
            alt="Flowbite Logo"
          />
          <Footer.LinkGroup>
            <Footer.Link href="#">Home</Footer.Link>
            <Footer.Link href="#">All Classes</Footer.Link>
            <Footer.Link href="#">Teach on SkillNest</Footer.Link>
            <Footer.Link href="#">Contact</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Copyright href="#" by="ARSDEV" year={2024} />
      </div>
    </Footer>
    </div>
  );
};

export default Foooter;