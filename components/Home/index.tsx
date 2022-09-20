import { HomeStyled } from "./style";

const Home = () => {
  return (
    <HomeStyled>
      <h2 className="apresentation">
        <span className="spanApresentation">Olá</span> eu sou o Victor da Cruz
      </h2>
      <h2>Desenvolvedor Front-end {"&"} estudante FullStack</h2>
      <div className="containerButtons">
        <button className="buttonCV">DOWNLOAD CV</button>
        <button className="buttonContact">CONTATO</button>
      </div>
    </HomeStyled>
  );
};

export default Home;
