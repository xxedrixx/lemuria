import fun from "../assets/images/fun.png";
import football from "../assets/images/football.png";

export const navLinks = [
  { href: "#home", label: "Acceuil" },
  { href: "#goals", label: "Nos Objectis" },
  { href: "#services", label: "Activités" },
  { href: "#contact", label: "Contact" },
];

export const services = [
  {
    imgURL: football,
    label: "Ecole de Foot Lemuria",
    subtext:
      "Nous sommes une école de football qui adopte la méthode allemande (Funinó) pour enseigner le football de manière ludique et structurée. Cette méthode innovante permet de développer les compétences techniques, tactiques et physiques des jeunes joueurs tout en favorisant leur épanouissement personnel. Nous accueillons des enfants et des adolescents, de 5 à 19 ans, qu'ils soient débutants ou déjà expérimentés. Notre objectif est d'offrir une formation de qualité, adaptée à chaque âge et niveau, dans un environnement motivant et respectueux.",
  },
  {
    imgURL: fun,
    label: "Lemuria Plaisir",
    subtext:
      "Nous proposons une activité dédiée aux adultes, axée sur le football, pour offrir un moment de plaisir et de détente à ceux qui sont occupés pendant la journée. Nous organisons des séances de football une fois par semaine en soirée, permettant ainsi à chacun de se relaxer après une journée bien remplie. L’objectif de cette activité est de favoriser la convivialité, le bien-être et le plaisir à travers la pratique du football, dans une ambiance décontractée et sans pression. C'est une excellente occasion pour les adultes de se retrouver, de jouer au foot et de passer un bon moment tout en prenant soin de leur santé.",
  },
];
