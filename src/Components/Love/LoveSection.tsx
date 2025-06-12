
import styled from "styled-components";

export const LoveSection = () => {
  return (
    <LetterContainer>
      <Paper>
        <h2>Para o amor da minha vida,</h2>
        <p>
          Eu nunca fui muito bom com palavras, mas com você, tudo fica mais
          fácil de sentir. Desde que você entrou na minha vida, tudo mudou. Tudo
          ficou mais leve, mais bonito, mais certo.
        </p>
        <p>
          A verdade é que eu sinto que a gente foi feito um para o outro. Você
          me completa. Cada detalhe que antes me pesava, você veio e suavizou.
          Você me levantou nos momentos difíceis, me fez sorrir nos simples e me
          mostrou o que é amor de verdade.
        </p>
        <p>
          Eu nunca vou esquecer do dia em que te vi no Sampa Arena. Naquele
          momento, eu olhei pra você e pensei: "vou namorar com aquela menina".
          E aqui estamos. Vivendo tudo isso.
        </p>
        <p>
          Obrigado por cada momento até aqui. Por esse Dia dos Namorados ao seu
          lado, e por todos os que ainda virão. Eu quero viver todos com você.
          te amando todos os dias cada vez mais.
        </p>
        <Signature>
          Com todo meu amor,
          <br />
          Pedro 💌
        </Signature>
      </Paper>
    </LetterContainer>
  );
};

const LetterContainer = styled.section`
  display: flex;
  justify-content: center;
  padding: 4rem 2rem;
`;

const Paper = styled.div`
  background-color: #f9f9f9;
  padding: 4rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  max-width: 800px;
  width: 100%;
  font-family: "Georgia", "Times New Roman", serif;
  color: #333;
  line-height: 1.8;
  font-size: 1.6rem;

  h2 {
    font-family: "Dancing Script", cursive;
    font-size: 3.2rem;
    margin-bottom: 2rem;
    color: #e91e63;
    text-align: center;
    font-weight: 700;
  }

  p {
    margin-bottom: 1.8rem;
    text-align: justify;
    letter-spacing: -0.4px;
    font-style: italic;
    font-size: 1.88rem;
    font-weight: 400;
  }

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    font-size: 1.4rem;

    h2 {
      font-size: 2.44rem;
    }
    p{
      font-size: 1.66rem;
    }
  }
`;

const Signature = styled.p`
  margin-top: 3rem;
  font-family: "Dancing Script", cursive !important;
  font-size: 2.2rem;
  color: #e91e63;
  text-align: right;

  @media (max-width: 768px) {
    font-size: 1.77rem !important;
  }
`;
