import { useCallback, useEffect, useRef, useState } from "react";
import { CarrouselProjectsStyled } from "./styles";

interface IPropsCarrousel {
  children: React.ReactNode;
  gapBetweenItems?: string;
  autoScroll?: boolean;
  autoScrollWidth?: number;
  autoScrollTime?: "slow" | "medium" | "fast" | "flash";
}

const CarouselProjects = ({
  children,
  gapBetweenItems,
  autoScroll = false,
  autoScrollWidth = 350,
  autoScrollTime = "medium",
}: IPropsCarrousel) => {
  const [isDragging, setIsDragging] = useState(false);
  const [isUserInteracting, setIsUserInteracting] = useState(false); // Nova variável de estado

  const [startX, setStartX] = useState(0);
  const [startScrollLeft, setStartScrollLeft] = useState(0);
  const [previousScrollLeft, setPreviousScrollLeft] = useState(0);

  const carouselRef = useRef<HTMLUListElement>(null);

  const smoothScrollTo = useCallback(
    (target: number) => {
      const element = carouselRef.current;
      if (element) {
        element.scrollTo({
          left: target,
          behavior: "smooth",
        });
      }
    },
    [carouselRef]
  );

  const handleMouseDown = (
    e: React.MouseEvent<HTMLUListElement, MouseEvent>
  ) => {
    setIsDragging(true);
    setIsUserInteracting(true); // Atualiza o estado do usuário interagindo
    setStartX(e.pageX);
    setStartScrollLeft(carouselRef.current!.scrollLeft);
    setPreviousScrollLeft(carouselRef.current!.scrollLeft);
  };

  const handleMouseMove = (
    e: React.MouseEvent<HTMLUListElement, MouseEvent>
  ) => {
    const element = carouselRef.current;
    if (!isDragging || !element) return;

    const mouseX = e.clientX;
    const carouselRect = element.getBoundingClientRect();

    const dragDistance = (mouseX - startX) * 1; // Ajustar velocidade do scroll de arrastar lateralmente com o mouse

    element.scrollTo({
      left: startScrollLeft - dragDistance,
      behavior: "auto",
    });

    setPreviousScrollLeft(element.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setIsUserInteracting(false);
    const element = carouselRef.current;
    if (!element) return;
    const scrollLeft = element.scrollLeft;
    const itemWidth = element
      .querySelector("li")!
      .getBoundingClientRect().width;
    const itemIndex = Math.round(scrollLeft / itemWidth);
    smoothScrollTo(itemIndex * itemWidth);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    setIsUserInteracting(false); // Atualiza o estado do usuário interagindo
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLUListElement>) => {
    const touch = e.touches[0];
    setIsDragging(true);
    setIsUserInteracting(true);
    setStartX(touch.pageX);
    setStartScrollLeft(carouselRef.current!.scrollLeft);
    setPreviousScrollLeft(carouselRef.current!.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLUListElement>) => {
    if (!isDragging) return;
    const touch = e.touches[0];
    const x = touch.pageX;
    const dragDistance = (x - startX) * 1; // Ajustar velocidade do scroll de arrastar lateralmente com o toque na tela
    carouselRef.current!.scrollLeft = startScrollLeft - dragDistance;
    setPreviousScrollLeft(carouselRef.current!.scrollLeft);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    const element = carouselRef.current!;
    const maxScrollLeft = element.scrollWidth - element.clientWidth;
    if (element.scrollLeft === maxScrollLeft) {
      smoothScrollTo(0);
    } else if (element.scrollLeft === 0 && previousScrollLeft !== 0) {
      smoothScrollTo(maxScrollLeft);
    }
    setIsUserInteracting(false); // Atualiza o estado do usuário interagindo
  };

  useEffect(() => {
    const element = carouselRef.current;
    if (!element) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isUserInteracting) return; // Se o usuário estiver interagindo com o carrossel, não faça nada
      if (e.keyCode === 37) {
        // seta esquerda
        smoothScrollTo(-autoScrollWidth);
      } else if (e.keyCode === 39) {
        // seta direita
        smoothScrollTo(autoScrollWidth);
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isUserInteracting, autoScrollWidth, smoothScrollTo]);

  useEffect(() => {
    const element = carouselRef.current;
    if (!element) return;
    let autoScrollInterval: NodeJS.Timeout;

    const autoScrollTimeMap: { [key: string]: number } = {
      slow: 8000,
      medium: 5000,
      fast: 3000,
      flash: 1000,
    };

    if (autoScroll && autoScrollTimeMap[autoScrollTime]) {
      autoScrollInterval = setInterval(() => {
        if (isUserInteracting) return; // Se o usuário estiver interagindo com o carrossel, não faça nada
        if (element.scrollLeft >= element.scrollWidth - element.offsetWidth) {
          element.scrollLeft = 0;
        } else {
          const target = element.scrollLeft + autoScrollWidth;
          smoothScrollTo(target);
          if (target >= element.scrollWidth - element.offsetWidth) {
            smoothScrollTo(0);
          }
        }
      }, autoScrollTimeMap[autoScrollTime]);
    }

    return () => {
      clearInterval(autoScrollInterval);
    };
  }, [
    autoScroll,
    autoScrollTime,
    autoScrollWidth,
    isUserInteracting,
    smoothScrollTo,
  ]);

  return (
    <CarrouselProjectsStyled gapBetweenItems={gapBetweenItems}>
      <ul
        className="ListItems"
        ref={carouselRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {children}
      </ul>
    </CarrouselProjectsStyled>
  );
};

export default CarouselProjects;
