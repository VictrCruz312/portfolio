import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ModalGlobal from "../../ModalGlobal";
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
  const [closeModal, setCloseModal] = useState<boolean>(true);
  const [isDeploy, setIsDeploy] = useState<Boolean>(true);

  useEffect(() => {
    if (!closeModal) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [closeModal]);

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
          <a
            className="repositorio"
            onClick={() => {
              setIsDeploy(false);
              setCloseModal(false);
            }}
          >
            Repositório
          </a>
          <a
            className={deploy ? "deploy" : "deployBloqued"}
            onClick={() => {
              setIsDeploy(true);
              setCloseModal(false);
            }}
          >
            deploy
          </a>
        </div>
        <div className="containerDescription">
          <p className="description">{description}</p>
        </div>
        <ModalGlobal
          closeModal={closeModal}
          setCloseModal={setCloseModal}
          link={
            isDeploy ? (deploy ? deploy : "") : repositorio ? repositorio : ""
          }
        >
          <iframe
            src={
              isDeploy ? (deploy ? deploy : "") : repositorio ? repositorio : ""
            }
            key={
              isDeploy ? (deploy ? deploy : "") : repositorio ? repositorio : ""
            }
            width="100%"
            height="100%"
          />
        </ModalGlobal>
      </CardProjectStyled>
    </div>
  );
};

export default CardProject;
