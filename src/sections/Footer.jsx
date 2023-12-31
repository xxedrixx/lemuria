import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="max-container flex justify-around max-[730px]:flex-col">
      <div className="max-lg:mb-[20px]">
        <div className="flex justify-center items-center font-montserrat text-2xl leading-normal font-medium mb-1">
          Contact
        </div>
        <div className="flex flex-col justify-center items-center font-montserrat text-base leading-normal text-white ">
          <a href="mailto:contact@lemuria.mg" className="underline">
            contact@lemuria.mg
          </a>
          <a href="tel:+261383149191" className="underline">
            +261 38 31 491 91
          </a>
        </div>
      </div>
      <div className="max-lg:mb-[10px]">
        <div className="flex justify-center items-center font-montserrat text-2xl leading-normal font-medium mb-1">
          Emplacement
        </div>
        <div className="flex justify-center items-center font-montserrat text-base leading-normal text-white">
          Antananarivo, Madagascar
        </div>
      </div>
      <div className="max-lg:mb-[10px]">
        <div className="flex justify-center items-center font-montserrat text-2xl leading-normal font-medium mb-1">
          Suivez-nous
        </div>
        <div className="flex justify-center items-center gap-4">
          <a
            href="https://www.facebook.com/people/Lemuria-Sport-Association/100090428749662/"
            target="_blank"
            rel="noreferrer"
          >
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
