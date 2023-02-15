import { BiLeftArrowCircle } from "react-icons/bi";
import { BiRightArrowCircle } from "react-icons/bi";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { CarrouselProjectsStyled } from "./styles";

const CarouselProjects = ({ listProjects }: any) => {
  const carousel = useRef<any>(null);

  const nextProduct = () => (carousel.current.scrollLeft += 270);

  const previousProduct = () => (carousel.current.scrollLeft -= 270);

  return (
    <CarrouselProjectsStyled>
      <button id="buttonLeft" onClick={previousProduct}>
        <BiLeftArrowCircle />
      </button>
      <ul className="CarrouselProjects" ref={carousel}>
        {listProjects?.map(({ id, image, link, alt }: any) => (
          <li key={id} className="project">
            <Link href={link}>
              <a target="_blank">
                <figure className="projectContainerImage">
                  <Image
                    src={image}
                    className="projectImage"
                    height="300"
                    width="320"
                    alt={alt}
                    objectFit="contain"
                  />
                </figure>
              </a>
            </Link>
          </li>
        ))}
      </ul>
      <button id="buttonRight" onClick={nextProduct}>
        <BiRightArrowCircle />
      </button>
    </CarrouselProjectsStyled>
  );
};

export default CarouselProjects;
