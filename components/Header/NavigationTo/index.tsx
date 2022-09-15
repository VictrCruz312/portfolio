import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import { ListNavigation, NavigationToStyled } from "./style";
import { motion } from "framer-motion";

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
  return (
    <motion.div
      initial={{ x: 0, y: -40, opacity: 0 }}
      animate={{ x: 0, y: 0, opacity: 1 }}
      transition={{ duration: 0.9 }}
    >
      <ListNavigation visible={visible} isOpen={isOpen}>
        <NavigationToStyled menu={menu} text="Home">
          <Link href="#top">
            <a onClick={() => setMenu("Home")}>Home</a>
          </Link>
        </NavigationToStyled>

        <NavigationToStyled menu={menu} text="Sobre">
          <Link href="#top">
            <a onClick={() => setMenu("Sobre")}>Sobre</a>
          </Link>
        </NavigationToStyled>

        <NavigationToStyled menu={menu} text="Tecnologias">
          <Link href="#top">
            <a onClick={() => setMenu("Tecnologias")}>Tecnologias</a>
          </Link>
        </NavigationToStyled>

        <NavigationToStyled menu={menu} text="Projetos">
          <Link href="#top">
            <a onClick={() => setMenu("Projetos")}>Projetos</a>
          </Link>
        </NavigationToStyled>

        <NavigationToStyled menu={menu} text="Contato">
          <Link href="#top">
            <a onClick={() => setMenu("Contato")}>Contato</a>
          </Link>
        </NavigationToStyled>
      </ListNavigation>
    </motion.div>
  );
};

export default NavigationTo;
