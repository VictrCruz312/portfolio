import { Dispatch, SetStateAction } from "react";
import { ListNavigation, NavigationToStyled } from "./style";
import { motion } from "framer-motion";
import * as Scroll from "react-scroll";

interface INavigationProps {
  setMenu: Dispatch<SetStateAction<string>>;
  menu: string;
  isOpen: boolean;
  visible?: boolean;
}

const NavigationTo = ({
  setMenu,
  visible = true,
  menu,
  isOpen,
}: INavigationProps) => {
  const smoothScroll = (id: string) => {
    const element = document.getElementById(id);
    console.log(element);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  };

  let Link = Scroll.Link;

  return (
    <motion.div
      initial={{ x: 0, y: -40, opacity: 0 }}
      animate={{ x: 0, y: 0, opacity: 1 }}
      transition={{ duration: 0 }}
    >
      <ListNavigation visible={visible} isOpen={isOpen}>
        <NavigationToStyled menu={menu} text="Home">
          <Link to="home" smooth>
            <button
              onClick={() => {
                setMenu("Home");
              }}
            >
              Home
            </button>
          </Link>
        </NavigationToStyled>

        <NavigationToStyled menu={menu} text="Sobre">
          <Link to="sobre" smooth>
            <button
              onClick={() => {
                setMenu("Sobre");
              }}
            >
              Sobre
            </button>
          </Link>
        </NavigationToStyled>

        <NavigationToStyled menu={menu} text="Tecnologias">
          <Link to="technologies" smooth>
            <button onClick={() => setMenu("Tecnologias")}>Tecnologias</button>
          </Link>
        </NavigationToStyled>

        <NavigationToStyled menu={menu} text="Projetos">
          <Link to="projetos" smooth>
            <button onClick={() => setMenu("Projetos")}>Projetos</button>
          </Link>
        </NavigationToStyled>

        <NavigationToStyled menu={menu} text="Contato">
          <Link to="home" smooth>
            <button onClick={() => setMenu("Contato")}>Contato</button>
          </Link>
        </NavigationToStyled>
      </ListNavigation>
    </motion.div>
  );
};

export default NavigationTo;
