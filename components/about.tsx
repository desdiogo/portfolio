"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("Sobre");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-justify leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>Sobre mim</SectionHeading>
      <p className="mb-3 indent-8">
        No ano de 2020 decido fazer uma transição de carreira, começando a estudar programação. Anteriormente trabalhei na área contábil durante 10 anos.
        Após seis meses de estudos consigo meu primeiro emprego na área, para trabalhar com Laravel e Vue.
      </p>
      <p className="indent-8">
        Na programação gosto de pensar na forma que resolverei o problema, e pesquiso as soluções que sejam efetivas. Minha principal stack é Vue, Nuxt.js e TypeScript,
        tenho conhecimentos também em React, Next.js, Node, TypeScript, Prisma, Php e Laravel. Estou sempre em busca de aprender novas tecnologias.
        Atualmente estou procurando uma posição em tempo integral como desenvolvedor de software.
      </p>
      <p className="indent-8">
        Quando não estou programando, gosto de ver animes, séries e filmes. Também gosto de acompanhar as atualizações que a tecnologia teve e aprender novos conceitos da linguagem.
        Atualmente estou estudando arquitetura de projetos e teste e em breve começarei a estudar inglês.
      </p>
    </motion.section>
  );
}
