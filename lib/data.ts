import { createElement } from "react";
import { FaVuejs, FaLaravel } from "react-icons/fa";
import twoTalkImg from "@/public/2talk.png";
import portifolioImg from "@/public/portifolio.png";
import { TProjects } from "./types";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Sobre",
    hash: "#about",
  },
  {
    name: "Projetos",
    hash: "#projects",
  },
  {
    name: "Habilidades",
    hash: "#skills",
  },
  {
    name: "Experiência",
    hash: "#experience",
  },
  {
    name: "Contato",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Desenvolvedor Full-Stack",
    company: "Bulldesk",
    description:
      "Neste projeto dava manutenção e criação de novas funcionalidades em um CRM  de marketing, utilizando Laravel e Vue.",
    icon: createElement(FaLaravel),
    date: "08/03/2021-06/08/2021",
  },
  {
    title: "Desenvolvedor Front-End",
    company: "Agrosolos",
    description:
      "Neste projeto foi desenvolvido um aplicativo voltado para agronegócio, utilizando Vue.",
    icon: createElement(FaVuejs),
    date: "30/08/2021-15/11/2021",
  },
  {
    title: "Desenvolvedor Front-End",
    company: "2Talk",
    description:
      "Estou trabalhando com desenvolvdor front-end, desenvolvendo um aplicativo voip e comunicação via chat ou sms, utiizando Vue, TypeScript, VueUse e Boostrap.",
    icon: createElement(FaVuejs),
    date: "17/01/2022",
  },
] as const;

export const projectsData: TProjects[] = [
  {
    title: "Portifólio",
    description:
      "Projeto pessoal para apresentar meu portifólio, experiência e conhecimento.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind"],
    imageUrl: portifolioImg,
  },
  {
    title: "2Talk",
    description:
      "Estou trabalhando neste projeto a quase dois anos, o aplicativo tem como foco a comunicação via Voip e a troca de mensagem via chat ou sms.",
    tags: ["Vue", "VueUse", "TypeScript", "Bootstrap", "Pinia"],
    imageUrl: twoTalkImg,
    site: "https://app.2talk.com"
  },
];

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Vue",
  "Nuxt.js",
  "React",
  "Next.js",
  "Node.js",
  "Nest.js",
  "Php",
  "Laravel",
  "Git",
  "Tailwind",
  "Prisma",
] as const;
