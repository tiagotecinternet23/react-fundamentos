import styled from "styled-components";

const StyledRodape = styled.footer`
  background-image: linear-gradient(pink, black);
  color: white;
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Rodape() {
  return (
    <StyledRodape>
      <h2>Rodapé da aplicação</h2>
    </StyledRodape>
  );
}

export default Rodape;
