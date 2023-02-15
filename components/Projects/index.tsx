import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ProjectsStyled } from "./style";
import { useEffect, useState } from "react";
import CarouselProjects from "./CarrouselProjects";

const Projects = () => {
  const listProjects = [
    {
      id: 1,
      link: "https://calculadora-antecipacao-de-valores.vercel.app/",
      image: "/projects/antecipação-de-valores.PNG",
      alt: "Antecipação de valores",
    },
    {
      id: 2,
      link: "https://victrcruz312.github.io/BLOG/",
      image: "/projects/Blog.PNG",
      alt: "Blog Kenzie",
    },
    {
      id: 3,
      link: "https://github.com/VictrCruz312/CNAB-Parser",
      image: "/projects/CNAB-Parser.PNG",
      alt: "CNAB Parser",
    },
    {
      id: 4,
      link: "https://victrcruz312.github.io/Kenzie-news/",
      image: "/projects/kenzie-news.PNG",
      alt: "Kenzie News",
    },
    {
      id: 5,
      link: "https://kenzie-livre.vercel.app/",
      image: "/projects/KenzieLivre.PNG",
      alt: "Kenzie Livre",
    },
    {
      id: 6,
      link: "https://react-entrega-s2-formulario-de-cadastro-victrcruz312.vercel.app/",
      image: "/projects/Kenzie-Hub.PNG",
      alt: "Kenzie Hub",
    },
    {
      id: 7,
      link: "https://github.com/VictrCruz312/KMDB",
      image: "/projects/KMDB.PNG",
      alt: "KMDB",
    },
    {
      id: 8,
      link: "https://nu-kenzie-blush-omega.vercel.app/",
      image: "/projects/nuKenzie.PNG",
      alt: "Nu Kenzie",
    },
  ];
  return (
    <div id="projetos" style={{ height: "100vh" }}>
      <ProjectsStyled>
        <h2 className="projectsTitle">Projetos</h2>
        <CarouselProjects listProjects={listProjects} />
      </ProjectsStyled>
    </div>
  );
};

export default Projects;
