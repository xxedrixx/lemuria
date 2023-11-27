import { RiMenuLine } from "react-icons/ri";
import { navLinks } from "../constants";
import { useState } from "react";

const Nav = () => {
  let [open, setOpen] = useState(false);
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container max-lg:flex-col max-lg:items-start">
        <div className="flex justify-between items-center mb-10">
          <a href="/">
            <img
              src=""
              alt="Logo"
              width={129}
              height={29}
              className="m-0 w-[129px] h-[29px]"
            />
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
            />
          </div>
        </div>
        <ul
          className={`
          flex-1 flex justify-center items-center gap-16 bg-lemuria w-full max-lg:flex-col max-lg:items-start max-lg:gap-10  
          transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }
          `}
        >
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
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
