import Image from "next/image";
import Link from "next/link";
import { CardProjectStyled } from "./style";

export interface IProject {
  id: number;
  image: string;
  link: string;
  alt: string;
}

interface IPropsCardProject {
  project: IProject;
}

const CardProject = ({ project }: IPropsCardProject) => {
  const { link, image, id, alt } = project;
  return (
    <CardProjectStyled>
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
    </CardProjectStyled>
  );
};

export default CardProject;
