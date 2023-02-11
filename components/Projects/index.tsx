import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ProjectsStyled } from "./style";
import { useEffect, useState } from "react";

const Projects = () => {
  const [slidesShow, setSlidesShow] = useState(3);

  useEffect(() => {
    if (window.innerWidth <= 450) {
      setSlidesShow(1);
    } else if (window.innerWidth <= 770 && window.innerWidth > 450) {
      setSlidesShow(2);
    } else if (window.innerWidth > 770) {
      setSlidesShow(3);
    }
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: slidesShow,
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
              <Link href="http://github.com/VictrCruz312">
                <a target="_blank">
                  <Image
                    src="/perfil.png"
                    height="300"
                    width="300"
                    alt="teste"
                    objectFit="cover"
                  />
                </a>
              </Link>
            </li>
            <li className="projectsProject ">
              <Link href="http://github.com/VictrCruz312">
                <a target="_blank">
                  <Image
                    src="/perfil.png"
                    height="300"
                    width="300"
                    alt="teste"
                    objectFit="cover"
                  />
                </a>
              </Link>
            </li>
            <li className="projectsProject ">
              <Link href="http://github.com/VictrCruz312">
                <a target="_blank">
                  <Image
                    src="/perfil.png"
                    height="300"
                    width="300"
                    alt="teste"
                    objectFit="cover"
                  />
                </a>
              </Link>
            </li>
            <li className="projectsProject ">
              <Link href="http://github.com/VictrCruz312">
                <a target="_blank">
                  <Image
                    src="/perfil.png"
                    height="300"
                    width="300"
                    alt="teste"
                    objectFit="cover"
                  />
                </a>
              </Link>
            </li>
            <li className="projectsProject ">
              <Link href="http://github.com/VictrCruz312">
                <a target="_blank">
                  <Image
                    src="/perfil.png"
                    height="300"
                    width="300"
                    alt="teste"
                    objectFit="cover"
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
