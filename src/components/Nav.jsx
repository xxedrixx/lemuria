import { RiMenuLine } from "react-icons/ri";
import { navLinks } from "../constants";
import { useState } from "react";

import logo from "../assets/images/lemuriaFA.png";

const Nav = () => {
  let [open, setOpen] = useState(false);
  return (
    <header className="padding-x py-1 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <div className="flex justify-between items-center">
          <a href="/">
            <img src={logo} alt="logo" className="m-0 w-[70px] h-[70px]" />
          </a>
          <div
            onClick={() => setOpen(!open)}
            className="hidden max-lg:block absolute right-[48px]"
          >
            <RiMenuLine
              alt="hamburger icon"
              width={25}
              height={25}
              className="cursor-pointer"
              size={40}
            />
          </div>
        </div>
        <ul
          className={`
          lg:flex lg:items-center gap-16 absolute lg:static max-lg:bg-lemuria lg:z-auto z-[-10] left-0 w-full lg:w-auto lg:pl-0 pl-[40px] transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }
          `}
        >
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
