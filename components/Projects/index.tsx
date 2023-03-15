import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ProjectsStyled } from "./style";
import CarouselProjects from "./CarrouselProjects";
import CardProject, { IProject } from "./CardProject";

const Projects = () => {
  const listProjects: IProject[] = [
    {
      id: 1,
      deploy: "https://calculadora-antecipacao-de-valores.vercel.app/",
      repositorio:
        "https://github.com/VictrCruz312/calculadora-antecipacao_de_valores",
      image: "/projects/antecipação-de-valores.PNG",
      alt: "Antecipação de valores",
      description: `calcule e saiba quanto vai receber do total de uma venda
       se optar por antecipação de recebimento do dinheiro.`,
    },
    {
      id: 2,
      deploy: "https://victrcruz312.github.io/BLOG/",
      repositorio: "https://github.com/VictrCruz312/BLOG",
      image: "/projects/Blog.PNG",
      alt: "Blog Kenzie",
      description: `A ideia desse projeto é simular uma comunidade, onde
       todos os membros cadastrados podem consumir, criar, atualizar e
        deletar publicações de texto. Também por em pratica o fluxo de
         autenticação em APIs.`,
    },
    {
      id: 3,
      deploy: null,
      repositorio: "https://github.com/VictrCruz312/CNAB-Parser",
      image: "/projects/CNAB-Parser.PNG",
      alt: "CNAB Parser",
      description: `CNAB-Parser é uma aplicação web desenvolvida
      em Python, utilizando o framework Django, que permite fazer
      upload e processar arquivos CNAB. Ele normaliza e armazena os
      dados em um banco de dados relacional e exibe operações importadas
      por loja com totalizador do saldo.`,
    },
    {
      id: 4,
      deploy: "https://victrcruz312.github.io/Kenzie-news/",
      repositorio: "https://github.com/VictrCruz312/Kenzie-news",
      image: "/projects/kenzie-news.PNG",
      alt: "Kenzie News",
      description: "Site de noticias com modo noturno.",
    },
    {
      id: 5,
      deploy: "https://kenzie-livre.vercel.app/",
      repositorio: "https://github.com/VictrCruz312/kenzielivre",
      image: "/projects/KenzieLivre.PNG",
      alt: "Kenzie Livre",
      description: `O projeto final de módulo na Kenzie Academy
      Brasil foi um desafio para criar um projeto do zero, incluindo a ideia,
      design (figma) e resultado final. O time era composto por 4
      desenvolvedores. A metodologia utilizada foi o Scrum/Kanban, o objetivo
      do projeto era reunir vendedores e clientes em uma única plataforma,
      facilitando a venda e compra de produtos em um e-commerce.
      `,
    },
    {
      id: 6,
      deploy:
        "https://react-entrega-s2-formulario-de-cadastro-victrcruz312.vercel.app/",
      repositorio: "https://github.com/VictrCruz312/KenzieHub",
      image: "/projects/Kenzie-Hub.PNG",
      alt: "Kenzie Hub",
      description: `O projeto é um hub para salvar tecnologias e aprendizados
      em andamento, bem como o nível de competência. Ele possui telas de
      registro, login e dashboard, e validações de formulários foram feitas
      usando bibliotecas como YUP e React Hook Form.
      `,
    },
    {
      id: 7,
      deploy: null,
      repositorio: "https://github.com/VictrCruz312/KMDB",
      image: "/projects/KMDB.PNG",
      alt: "KMDB",
      description: `Api para cadastro de filmes e possibilidade de usuários
      avaliarem os filmes cadastrados.`,
    },
    {
      id: 8,
      deploy: "https://nu-kenzie-blush-omega.vercel.app/",
      repositorio: "https://github.com/VictrCruz312/NuKenzie",
      image: "/projects/nuKenzie.PNG",
      alt: "Nu Kenzie",
      description: "Aplicativo de controle de finanças feito em react",
    },
  ];
  return (
    <ProjectsStyled id="projects">
      <h2 className="projectsTitle">Projetos</h2>
      <CarouselProjects
        autoScroll={true}
        autoScrollTime="fast"
        autoScrollWidth={312}
      >
        {listProjects?.map((project: IProject) => (
          <CardProject project={project} key={project.id} />
        ))}
      </CarouselProjects>
    </ProjectsStyled>
  );
};

export default Projects;
