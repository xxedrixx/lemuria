import { FaFileSignature } from "react-icons/fa";
import { TbTournament } from "react-icons/tb";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#sports", label: "Sports" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
];

export const services = [
  {
    imgURL: TbTournament,
    label: "Tournoi",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    imgURL: FaFileSignature,
    label: "Agence",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
];
