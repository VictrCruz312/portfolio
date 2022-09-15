import { HeaderStyled, NavigationStyled } from "./style";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import NavigationTo from "./NavigationTo";
import { motion } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [menu, setMenu] = useState<string>("Home");

  return (
    <HeaderStyled>
      <div className="containerLogo">
        <FaChevronLeft />
        <h1 className="logo">/ Victor da Cruz</h1>
        <FaChevronRight />
      </div>
      <NavigationStyled isOpen={isOpen}>
        <div className="menuSuspense">
          <button
            onClick={() => setIsOpen((isOpen) => (isOpen ? false : true))}
          >
            {isOpen ? <IoClose /> : <HiMenu />}
          </button>
        </div>
        <NavigationTo
          visible={false}
          isOpen={isOpen}
          setMenu={setMenu}
          menu={menu}
        />
        {isOpen && (
          <NavigationTo
            visible={true}
            isOpen={isOpen}
            setMenu={setMenu}
            menu={menu}
          />
        )}
      </NavigationStyled>
    </HeaderStyled>
  );
};

export default Header;
