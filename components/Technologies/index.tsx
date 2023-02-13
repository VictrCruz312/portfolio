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
                  src="/technologies/javascript.svg"
                  alt="javascript"
                  width="30px"
                  height="30px"
                  objectFit="cover"
                />
                <span className="technologiesSkillLevel"></span>
              </li>

              <li className="technologiesSkill">
                <p className="technologiesSkillName">Typescript</p>
                <Image
                  className="technologiesSkillImage"
                  src="/technologies/typescript.svg"
                  alt="javascript"
                  width="30px"
                  height="30px"
                  objectFit="cover"
                />
                <span className="technologiesSkillLevel"></span>
              </li>
              <li className="technologiesSkill">
                <p className="technologiesSkillName">React</p>
                <Image
                  className="technologiesSkillImage"
                  src="/technologies/react.svg"
                  alt="javascript"
                  width="30px"
                  height="30px"
                  objectFit="cover"
                />
                <span className="technologiesSkillLevel"></span>
              </li>
              <li className="technologiesSkill">
                <p className="technologiesSkillName">React</p>
                <Image
                  className="technologiesSkillImage"
                  src="/technologies/react.svg"
                  alt="javascript"
                  width="30px"
                  height="30px"
                  objectFit="cover"
                />
                <span className="technologiesSkillLevel"></span>
              </li>
              <li className="technologiesSkill">
                <p className="technologiesSkillName">NextJS</p>
                <Image
                  className="technologiesSkillImage"
                  src="/technologies/nextjs.svg"
                  alt="javascript"
                  width="30px"
                  height="30px"
                  objectFit="cover"
                />
                <span className="technologiesSkillLevel"></span>
              </li>
              <li className="technologiesSkill">
                <p className="technologiesSkillName">Python</p>
                <Image
                  className="technologiesSkillImage"
                  src="/technologies/python.svg"
                  alt="javascript"
                  width="30px"
                  height="30px"
                  objectFit="cover"
                />
                <span className="technologiesSkillLevel"></span>
              </li>
              <li className="technologiesSkill">
                <p className="technologiesSkillName">DJANGO</p>
                <Image
                  className="technologiesSkillImage"
                  src="/technologies/django.svg"
                  alt="javascript"
                  width="30px"
                  height="30px"
                  objectFit="cover"
                />
                <span className="technologiesSkillLevel"></span>
              </li>
              <li className="technologiesSkill">
                <p className="technologiesSkillName">HTML</p>
                <Image
                  className="technologiesSkillImage"
                  src="/technologies/html.svg"
                  alt="javascript"
                  width="30px"
                  height="30px"
                  objectFit="cover"
                />
                <span className="technologiesSkillLevel"></span>
              </li>
              <li className="technologiesSkill">
                <p className="technologiesSkillName">CSS</p>
                <Image
                  className="technologiesSkillImage"
                  src="/technologies/css.svg"
                  alt="javascript"
                  width="30px"
                  height="30px"
                  objectFit="cover"
                />
                <span className="technologiesSkillLevel"></span>
              </li>
              <li className="technologiesSkill">
                <p className="technologiesSkillName">NodeJS</p>
                <Image
                  className="technologiesSkillImage"
                  src="/technologies/nodejs.svg"
                  alt="javascript"
                  width="30px"
                  height="30px"
                  objectFit="cover"
                />
                <span className="technologiesSkillLevel"></span>
              </li>
              <li className="technologiesSkill">
                <p className="technologiesSkillName">ExpressJS</p>
                <Image
                  className="technologiesSkillImage"
                  src="/technologies/expressjs.svg"
                  alt="javascript"
                  width="30px"
                  height="30px"
                  objectFit="cover"
                />
                <span className="technologiesSkillLevel"></span>
              </li>
              <li className="technologiesSkill">
                <p className="technologiesSkillName">TypeORM</p>
                <Image
                  className="technologiesSkillImage"
                  src="/technologies/not-found.svg"
                  alt="javascript"
                  width="30px"
                  height="30px"
                  objectFit="cover"
                />
                <span className="technologiesSkillLevel"></span>
              </li>
              <li className="technologiesSkill">
                <p className="technologiesSkillName">PostgreSQL</p>
                <Image
                  className="technologiesSkillImage"
                  src="/technologies/postgresql.svg"
                  alt="javascript"
                  width="30px"
                  height="30px"
                  objectFit="cover"
                />
                <span className="technologiesSkillLevel"></span>
              </li>
              <li className="technologiesSkill">
                <p className="technologiesSkillName">Jest</p>
                <Image
                  className="technologiesSkillImage"
                  src="/technologies/jest.svg"
                  alt="javascript"
                  width="30px"
                  height="30px"
                  objectFit="cover"
                />
                <span className="technologiesSkillLevel"></span>
              </li>
              <li className="technologiesSkill">
                <p className="technologiesSkillName">Pytest</p>
                <Image
                  className="technologiesSkillImage"
                  src="/technologies/not-found.svg"
                  alt="javascript"
                  width="30px"
                  height="30px"
                  objectFit="cover"
                />
                <span className="technologiesSkillLevel"></span>
              </li>
              <li className="technologiesSkill">
                <p className="technologiesSkillName">Docker</p>
                <Image
                  className="technologiesSkillImage"
                  src="/technologies/docker.svg"
                  alt="javascript"
                  width="30px"
                  height="30px"
                  objectFit="cover"
                />
                <span className="technologiesSkillLevel"></span>
              </li>
              <li className="technologiesSkill">
                <p className="technologiesSkillName">Git</p>
                <Image
                  className="technologiesSkillImage"
                  src="/technologies/git.svg"
                  alt="javascript"
                  width="30px"
                  height="30px"
                  objectFit="cover"
                />
                <span className="technologiesSkillLevel"></span>
              </li>
              <li className="technologiesSkill">
                <p className="technologiesSkillName">GitHub</p>
                <Image
                  className="technologiesSkillImage"
                  src="/technologies/github.svg"
                  alt="javascript"
                  width="30px"
                  height="30px"
                  objectFit="cover"
                />
                <span className="technologiesSkillLevel"></span>
              </li>
              <li className="technologiesSkill">
                <p className="technologiesSkillName">MaterialUI</p>
                <Image
                  className="technologiesSkillImage"
                  src="/technologies/materialui.svg"
                  alt="javascript"
                  width="30px"
                  height="30px"
                  objectFit="cover"
                />
                <span className="technologiesSkillLevel"></span>
              </li>
              <li className="technologiesSkill">
                <p className="technologiesSkillName">linux</p>
                <Image
                  className="technologiesSkillImage"
                  src="/technologies/linux.svg"
                  alt="javascript"
                  width="30px"
                  height="30px"
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
                <p className="technologiesSkillName">Scrum</p>
                <Image
                  className="technologiesSkillImage"
                  src="/technologies/not-found.svg"
                  alt="javascript"
                  width="30px"
                  height="30px"
                  objectFit="cover"
                />
                <span className="technologiesSkillLevel"></span>
              </li>
              <li className="technologiesSkill">
                <p className="technologiesSkillName">Kanban</p>
                <Image
                  className="technologiesSkillImage"
                  src="/technologies/not-found.svg"
                  alt="javascript"
                  width="30px"
                  height="30px"
                  objectFit="cover"
                />
                <span className="technologiesSkillLevel"></span>
              </li>
              <li className="technologiesSkill">
                <p className="technologiesSkillName">Trello</p>
                <Image
                  className="technologiesSkillImage"
                  src="/technologies/not-found.svg"
                  alt="javascript"
                  width="30px"
                  height="30px"
                  objectFit="cover"
                />
                <span className="technologiesSkillLevel"></span>
              </li>
              <li className="technologiesSkill">
                <p className="technologiesSkillName">Jira</p>
                <Image
                  className="technologiesSkillImage"
                  src="/technologies/not-found.svg"
                  alt="javascript"
                  width="30px"
                  height="30px"
                  objectFit="cover"
                />
                <span className="technologiesSkillLevel"></span>
              </li>
              <li className="technologiesSkill">
                <p className="technologiesSkillName">SOLID</p>
                <Image
                  className="technologiesSkillImage"
                  src="/technologies/not-found.svg"
                  alt="javascript"
                  width="30px"
                  height="30px"
                  objectFit="cover"
                />
                <span className="technologiesSkillLevel"></span>
              </li>
              <li className="technologiesSkill">
                <p className="technologiesSkillName">Clean code</p>
                <Image
                  className="technologiesSkillImage"
                  src="/technologies/not-found.svg"
                  alt="javascript"
                  width="30px"
                  height="30px"
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
