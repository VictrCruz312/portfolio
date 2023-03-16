import React from "react";
import { ModalGlobalStyled } from "./styles";
import { GrFormClose } from "react-icons/gr";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";

interface IPropsModalGlobal {
  children: React.ReactNode;
  closeModal: boolean;
  setCloseModal: React.Dispatch<React.SetStateAction<boolean>>;
  link: string;
}

const ModalGlobal = ({
  children,
  closeModal,
  setCloseModal,
  link,
}: IPropsModalGlobal) => {
  return (
    <ModalGlobalStyled closeModal={closeModal}>
      <div className="containerModal">
        <div className="modalInfo">
          <Link href={link}>
            <a target="_blank">
              abrir link externo <BsArrowUpRight />
            </a>
          </Link>
          <button onClick={() => setCloseModal(true)}>
            <GrFormClose />
          </button>
        </div>
        <div className="containerInfos">{children}</div>
      </div>
    </ModalGlobalStyled>
  );
};

export default ModalGlobal;
