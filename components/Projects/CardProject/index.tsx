import Image from "next/image";
import Link from "next/link";
import { CardProjectStyled } from "./style";

export interface IProject {
  id: number;
  image: string;
  deploy: string | null;
  repositorio: string;
  alt: string;
  description: string;
}

interface IPropsCardProject {
  project: IProject;
}

const CardProject = ({ project }: IPropsCardProject) => {
  const { deploy, repositorio, description, image, id, alt } = project;
  return (
    <div className="borderColored">
      <CardProjectStyled>
        <figure className="projectContainerImage">
          <Image
            src={image}
            className="projectImage"
            height="200"
            width="312px"
            alt={alt}
            layout="responsive"
            objectFit="revert-layer"
          />
        </figure>
        <div className="redirects">
          <Link href={repositorio}>
            <a className="repositorio" target="_blank">
              Repositório
            </a>
          </Link>
          <Link href={deploy ? deploy : ""}>
            <a className={deploy ? "deploy" : "deployBloqued"} target="_blank">
              Deploy
            </a>
          </Link>
        </div>
        <div className="containerDescription">
          <p className="description">{description}</p>
        </div>
      </CardProjectStyled>
    </div>
  );
};

export default CardProject;
