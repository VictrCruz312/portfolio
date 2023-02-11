import Image from "next/image";
import Link from "next/link";
import { ProjectsStyled } from "./style";

const Projects = () => {
  return (
    <ProjectsStyled>
      <h2 className="projectsTitle">Projects</h2>
      <ul className="projectsList">
        <li className="projectsProject">
          <Link href="http://github.com/VictrCruz312">
            <a target="_blank">
              <Image
                src="/perfil.png"
                height="400"
                width="400"
                alt="teste"
                objectFit="cover"
              />
            </a>
          </Link>
        </li>
        <li className="projectsProject">
          <Link href="http://github.com/VictrCruz312">
            <a target="_blank">
              <Image
                src="/perfil.png"
                height="400"
                width="400"
                alt="teste"
                objectFit="cover"
              />
            </a>
          </Link>
        </li>
        <li className="projectsProject">
          <Link href="http://github.com/VictrCruz312">
            <a target="_blank">
              <Image
                src="/perfil.png"
                height="400"
                width="400"
                alt="teste"
                objectFit="cover"
              />
            </a>
          </Link>
        </li>
        <li className="projectsProject">
          <Link href="http://github.com/VictrCruz312">
            <a target="_blank">
              <Image
                src="/perfil.png"
                height="400"
                width="400"
                alt="teste"
                objectFit="cover"
              />
            </a>
          </Link>
        </li>
        <li className="projectsProject">
          <Link href="http://github.com/VictrCruz312">
            <a target="_blank">
              <Image
                src="/perfil.png"
                height="400"
                width="400"
                alt="teste"
                objectFit="cover"
              />
            </a>
          </Link>
        </li>
      </ul>
    </ProjectsStyled>
  );
};

export default Projects;
