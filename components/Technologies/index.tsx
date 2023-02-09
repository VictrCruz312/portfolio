import Image from "next/image";
import { TechnologiesStyled } from "./style";

const Technologies = () => {
  return (
    <TechnologiesStyled id="technologies">
      <h2 className="technologiesTitle">hard skills</h2>
      <ul className="technologiesListSkills">
        <li className="technologiesSkill">
          <p className="technologiesSkillName">JavaScript</p>
          <Image
            className="technologiesSkillImage"
            src="/teste"
            alt="Foto de Victor"
            width="400px"
            height="400px"
            layout="responsive"
            objectFit="cover"
          />
          <span className="technologiesSkillLevel"></span>
        </li>
        <li className="technologiesSkill">
          <p className="technologiesSkillName">TypeScript</p>
          <Image
            className="technologiesSkillImage"
            src="/teste"
            alt="Foto de Victor"
            width="400px"
            height="400px"
            layout="responsive"
            objectFit="cover"
          />
          <span className="technologiesSkillLevel"></span>
        </li>
        <li className="technologiesSkill">
          <p className="technologiesSkillName">React</p>
          <Image
            className="technologiesSkillImage"
            src="/teste"
            alt="Foto de Victor"
            width="400px"
            height="400px"
            layout="responsive"
            objectFit="cover"
          />
          <span className="technologiesSkillLevel"></span>
        </li>
      </ul>
    </TechnologiesStyled>
  );
};

export default Technologies;
