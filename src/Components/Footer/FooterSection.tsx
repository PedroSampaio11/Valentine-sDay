
import styled from "styled-components";

export const FooterSection = () => {
  return (
    <Footer>
      <p>
      <p>Feito com muito amor ❤️ Pedro Sampaio</p>
      </p>
    </Footer>
  );
};

const Footer = styled.footer`
p{

}
  text-align: center;
  padding: 2rem;
  margin-top: 4rem;
  font-size: 1.4rem;
  color: #cb869a;
  font-family: "Lato", cursive;
  border-top: 1px solid #f4c9d3;
  letter-spacing: -.5px;
  @media (max-width: 768px) {
    font-size: 1.33rem;
    padding: 1.5rem;
  }
`;
