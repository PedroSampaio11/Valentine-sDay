import styled from "styled-components";
export const HeroSection = () => {
  return (
    <Container>
      <Infos>
        <h1 data-aos="fade-right">Feliz Dia dos Namorados, Meu Amor!</h1>
        <p data-aos="fade-left">
          Este é um pedacinho do meu coração para agradecer por ter você na
          minha vida.
        </p>
      </Infos>
    </Container>
  );
};
const Container = styled.section`
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`;

const Infos = styled.div`
  display: flex;
  flex-direction: column;
  width: 77%;
  align-items: center;
  gap: 1.5rem;
  text-align: center;

  h1 {
    font-size: 6rem;
    font-weight: 700;
    color: #cb869f;

    @media (max-width: 768px) {
      font-size: 3.4rem;
      width: 100%;
    }

    @media (max-width: 480px) {
      font-size: 3.1rem;
      width: 100%;
    }
  }

  p {
    font-size: 2.2rem;
    color: #444;

    @media (max-width: 768px) {
      font-size: 2rem;
    }

    @media (max-width: 480px) {
      font-size: 1.6rem;
    }
  }
`;
