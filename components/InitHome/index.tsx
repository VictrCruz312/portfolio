import { InitHomeStyled } from "./style";
import Image from "next/image";

const InitHome = () => {
  return (
    <InitHomeStyled>
      <div className="containerApresentation">
        <h1 className="apresentation">Olá, me chamo Victor</h1>
      </div>

      <h3 className="apresentation">Sou um desenvolvedor FullStack</h3>
    </InitHomeStyled>
  );
};

export default InitHome;
