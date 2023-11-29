import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="max-container flex justify-around max-[730px]:flex-col">
      <div className="max-lg:mb-[20px]">
        <div className="flex justify-center items-center font-montserrat text-2xl leading-normal font-medium mb-1">
          Contact Us
        </div>
        <div className="flex justify-center items-center font-montserrat text-base leading-normal text-white">
          <a href="mailto:lemuria@lemuria.mg" className="underline">
            lemuria@lemuria.mg
          </a>
        </div>
      </div>
      <div className="max-lg:mb-[10px]">
        <div className="flex justify-center items-center font-montserrat text-2xl leading-normal font-medium mb-1">
          Our location
        </div>
        <div className="flex justify-center items-center font-montserrat text-base leading-normal text-white">
          Antananarivo, Madagascar
        </div>
      </div>
      <div className="max-lg:mb-[10px]">
        <div className="flex justify-center items-center font-montserrat text-2xl leading-normal font-medium mb-1">
          Follow Us
        </div>
        <div className="flex justify-center items-center gap-4">
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <FaFacebook size={30} color="white" />
          </a>{" "}
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram size={30} color="white" />
          </a>
        </div>{" "}
      </div>
    </footer>
  );
};

export default Footer;
