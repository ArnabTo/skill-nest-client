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
            <Footer.Link href="#">About</Footer.Link>
            <Footer.Link href="#">Privacy Policy</Footer.Link>
            <Footer.Link href="#">Licensing</Footer.Link>
            <Footer.Link href="#">Contact</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Copyright href="#" by="ARSDeEV" year={20224} />
      </div>
    </Footer>
    </div>
  );
};

export default Foooter;