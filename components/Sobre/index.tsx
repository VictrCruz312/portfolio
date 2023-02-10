import Image from "next/image";
import Link from "next/link";
import { AboutStyled } from "./style";

const About = () => {
  return (
    <AboutStyled id="sobre">
      <div className="sobreContainerImg">
        <Image
          className="borderColored"
          src="/sobre-mim.png"
          alt="Foto de Victor"
          width="400px"
          height="400px"
          layout="responsive"
          objectFit="cover"
        />
      </div>
      <div className="sobreContainerTexts">
        <h2 className="sobreTitle">Sobre mim</h2>
        <p className="sobreLocalization">Teixeiras, Minas Gerais</p>
        <p className="sobreApresentation">
          Olá eu me chamo Victor, tenho 18 anos e sou de Teixeiras MG. Desde os
          meus 15 anos, onde tive meu primeiro contato com programação, eu me
          apaixonei nesta área. Por isso, em 2021, decidi me dedicar
          integralmente aos estudos e trilhar este caminho e aprender mais sobre
          este mundo maravilhoso da programação.
        </p>
        <div className="buttonsContact">
          <Link href="https://www.linkedin.com/in/victor-d-cruz">
            <a className="redirectContact linkedin" target="_blank">
              Linkedin
            </a>
          </Link>
          <Link href="https://docs.google.com/document/d/1i9HsR0yjM-Hsz1ptHQQe-fRQEZ62A_CISADc8vdcz48/edit?usp=sharing">
            <a className="redirectContact curriculum" target="_blank">
              currículo
            </a>
          </Link>
        </div>
      </div>
    </AboutStyled>
  );
};

export default About;
