import { InitHomeStyled } from "./style";
import Image from "next/image";
import Link from "next/link";

const InitHome = () => {
  return (
    <InitHomeStyled id="home">
      <div className="containerInfos">
        <h1 className="apresentation">Olá, eu sou o {"{Victor}"}.</h1>
        <p className="description">Desenvolvedor FullStack</p>
        <div className="buttonsContact">
          <Link href="https://www.linkedin.com/in/victor-d-cruz">
            <a className="redirectContact linkedin" target="_blank">
              Linkedin
            </a>
          </Link>
          <Link href="https://github.com/VictrCruz312">
            <a className="redirectContact gitHub" target="_blank">
              github
            </a>
          </Link>
        </div>
      </div>
      <div className="perfilImg">
        <Image
          className="borderColored"
          src="/perfil.png"
          alt="Foto de Victor"
          width="400"
          height="400"
          layout="responsive"
          objectFit="contain"
        />
      </div>
    </InitHomeStyled>
  );
};

export default InitHome;
