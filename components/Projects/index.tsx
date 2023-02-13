import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ProjectsStyled } from "./style";
import { useEffect, useState } from "react";

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div id="projetos" style={{ height: "100vh" }}>
      <ProjectsStyled>
        <h2 className="projectsTitle">Projetos</h2>
        <ul className="projectsList">
          <Slider {...settings}>
            <li className="projectsListProject ">
              <Link href="https://calculadora-antecipacao-de-valores.vercel.app/">
                <a target="_blank">
                  <Image
                    src="/projects/antecipação-de-valores.PNG"
                    className="projectsImg"
                    height="300"
                    width="320"
                    alt="Antecipação de valores"
                    objectFit="contain"
                  />
                </a>
              </Link>
            </li>
            <li className="projectsProject ">
              <Link href="https://victrcruz312.github.io/BLOG/">
                <a target="_blank">
                  <Image
                    src="/projects/Blog.PNG"
                    className="projectsImg"
                    height="300"
                    width="320"
                    alt="Blog Kenzie"
                    objectFit="contain"
                  />
                </a>
              </Link>
            </li>
            <li className="projectsProject ">
              <Link href="https://github.com/VictrCruz312/CNAB-Parser">
                <a target="_blank">
                  <Image
                    src="/projects/CNAB-Parser.PNG"
                    className="projectsImg"
                    height="300"
                    width="320"
                    alt="CNAB Parser"
                    objectFit="contain"
                  />
                </a>
              </Link>
            </li>
            <li className="projectsProject ">
              <Link href="https://victrcruz312.github.io/Kenzie-news/">
                <a target="_blank">
                  <Image
                    src="/projects/kenzie-news.PNG"
                    className="projectsImg"
                    height="300"
                    width="320"
                    alt="Kenzie News"
                    objectFit="contain"
                  />
                </a>
              </Link>
            </li>
            <li className="projectsProject ">
              <Link href="https://kenzie-livre.vercel.app/">
                <a target="_blank">
                  <Image
                    src="/projects/KenzieLivre.PNG"
                    className="projectsImg"
                    height="300"
                    width="320"
                    alt="Kenzie Livre"
                    objectFit="contain"
                  />
                </a>
              </Link>
            </li>
            <li className="projectsProject ">
              <Link href="https://react-entrega-s2-formulario-de-cadastro-victrcruz312.vercel.app/">
                <a target="_blank">
                  <Image
                    src="/projects/Kenzie-Hub.PNG"
                    className="projectsImg"
                    height="300"
                    width="320"
                    alt="Kenzie Hub"
                    objectFit="contain"
                  />
                </a>
              </Link>
            </li>
            <li className="projectsProject ">
              <Link href="https://github.com/VictrCruz312/KMDB">
                <a target="_blank">
                  <Image
                    src="/projects/KMDB.PNG"
                    className="projectsImg"
                    height="300"
                    width="320"
                    alt="KMDB"
                    objectFit="contain"
                  />
                </a>
              </Link>
            </li>
            <li className="projectsProject ">
              <Link href="https://nu-kenzie-blush-omega.vercel.app/">
                <a target="_blank">
                  <Image
                    src="/projects/nuKenzie.PNG"
                    className="projectsImg"
                    height="300"
                    width="320"
                    alt="Nu Kenzie"
                    objectFit="contain"
                  />
                </a>
              </Link>
            </li>
          </Slider>
        </ul>
      </ProjectsStyled>
    </div>
  );
};

export default Projects;
