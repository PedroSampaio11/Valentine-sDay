import React from "react";
import { useKeenSlider } from "keen-slider/react";
import styled from "styled-components";
import "keen-slider/keen-slider.min.css";

const polaroids = [
  { src: "/images/anonovo.jpg", caption: "Nossa Primeira Virada Juntos! ✨🥂" },
  {
    src: "/images/campos.PNG",
    caption: "Aquele friozinho gostoso em Campos-SP ❤️",
  },
  { src: "/images/caxambu.jpg", caption: "Caxambu-MG 🏞️" },
  { src: "/images/comendo.jpg", caption: "Ranguinho no Bistrô 56! 🍽️😋" },
  { src: "/images/dupla.jpg", caption: "Sempre de duplinha💖" },
  { src: "/images/empresaria.jpg", caption: "Minha empresária maravilhosa! " },
  {
    src: "/images/perrengue.jpg",
    caption: "Um pouquinho de perrengue que virou história pra rir! 😂",
  },
  { src: "/images/titios.jpg", caption: "Os titios da Alice!👨‍👩‍👧‍👦" },
  { src: "/images/viagemfamilia.jpg", caption: "Prainha em família 🏖️" },
  { src: "/images/rolezin.jpeg", caption: "Doidinhos para ir embora KKK" },
  { src: "/images/niver.jpg", caption: "De duplinha no meu niver! 🥳" },
  { src: "/images/natal.jpeg", caption: "Nosso Natal🎄🎁" },
  {
    src: "/images/moments.jpg",
    caption: "Aquela conferida no espelho do quarto em MG!✨",
  },
  { src: "/images/minas.jpeg", caption: "Dia incrível em Extrema-MG! 🌄" },
  {
    src: "/images/holambra.jpg",
    caption: "Sua cidade preferida, Holambra-SP!  🌷",
  },
  { src: "/images/pequena.jpeg", caption: "Gente pequena 🥰" },
  {
    src: "/images/corinthians.jpg",
    caption: "O dia em que você realizou um sonho meu! 🖤",
  },
  { src: "/images/cunhada.jpeg", caption: "Sua cunhadinha !  👭❤️" },
  { src: "/images/cume.jpg", caption: "Hora de comer docinhos e dançar!💃" },
  { src: "/images/love.jpg", caption: "eu & tu muie" },
  { src: "/images/beach.jpg", caption: "EU TE AMO TANTO!" },
  { src: "/images/1.jpg", caption: "primeiro dia na sua familia" },
  { src: "/images/gym.jpg", caption: "Nosso primeiro treino" },
];

export const PolaroidSection: React.FC = () => {
  const animation = { duration: 48000, easing: (t: number) => t };
  const numberOfCards = polaroids.length;

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: "performance",
    drag: true,
    mode: "free",
    slides: {
      perView: 1.2,
      spacing: 16,
    },
    breakpoints: {
      "(max-width: 640px)": {
        slides: {
          perView: 1.1,
          spacing: 21,
        },
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 4,
          spacing: 22,
        },
      },
    },
    created(s) {
      s.moveToIdx(numberOfCards - 1, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + numberOfCards - 1, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + numberOfCards - 1, true, animation);
    },
  });

  return (
    <Section>
      <h2 data-aos="fade-up-right">Memórias em Polaroid 📷</h2>
      <Carousel ref={sliderRef} className="keen-slider">
        {polaroids.map((item, i) => (
          <Slide className="keen-slider__slide" key={i}>
            <Polaroid>
              <Image src={item.src} alt={item.caption} />
              <Caption>{item.caption}</Caption>
            </Polaroid>
          </Slide>
        ))}
      </Carousel>
    </Section>
  );
};

// Styled Components

const Section = styled.section`
  padding: 4rem 1rem;
  margin-top: 4rem;
  text-align: center;
  h2 {
    font-size: 4rem;
    margin-bottom: 2rem;
    @media (max-width: 480px) {
      font-size: 3.2rem;
      width: 100%;
    }
  }
`;

const Carousel = styled.div`
  max-width: 1222px;
  margin: 0 auto;
  padding: 1rem 0;
`;
const Slide = styled.div`
  display: flex;
  justify-content: center;
  padding: 4rem 0;
`;

const Polaroid = styled.div`
  background: white;
  width: 255px;
  height: 333px;
  padding: 2rem 1.4rem;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.044);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease;
  position: relative;

  &:hover {
    transform: rotate(-2deg) scale(1.02);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 244px;
  object-fit: cover;
  border-radius: 2px;
`;

const Caption = styled.p`
  font-size: 1.44rem;
  font-weight: 500;
  color: #333;
  font-family: "Courier New", Courier, monospace;
`;
