import Image from "next/image";
import {
  ContainerListSkills,
  ScrollableContainer,
  TechnologiesStyled,
} from "./style";

const Technologies = () => {
  return (
    <TechnologiesStyled id="technologies">
      <h2 className="technologiesTitle">Tecnologias</h2>
      <div className="technologiesContainer">
        <div className="technologiesSkillsContainer borderColored">
          <h3 className="technologiesSkillTitle">hard skills</h3>
          <ScrollableContainer>
            <ContainerListSkills className="technologiesListSkills">
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
            </ContainerListSkills>
          </ScrollableContainer>
        </div>
        <div className="technologiesSkillsContainer borderColored">
          <h3 className="technologiesSkillTitle">soft skills</h3>
          <ScrollableContainer>
            <ContainerListSkills className="technologiesListSkills">
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
            </ContainerListSkills>
          </ScrollableContainer>
        </div>
      </div>
    </TechnologiesStyled>
  );
};

export default Technologies;
