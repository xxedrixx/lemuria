import { RiMenuLine } from "react-icons/ri";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center  max-container">
        <a href="/">
          <img
            src=""
            alt="LemuriaLogo"
            width={129}
            height={29}
            className="m-0 w-[129px] h-[29px]"
          />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <RiMenuLine alt="hamburger icon" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
