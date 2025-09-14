import Container from "../components/ui/container";
import Title from "../components/ui/title";
import Description from "../components/ui/description";
import Button from "../components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <Container>
      <Title>Bem vindo ao Tic-Tac-Toe!</Title>
      <Description>
        Este é um jogo da velha desenvolvido em React, ele foi proposto pela
        professora{" "}
        <a
          href="https://www.linkedin.com/in/ana-paula-m%C3%BCller-giancoli"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ana Paula
        </a>{" "}
        como um projeto para praticar os conceitos de componentes e estado.
      </Description>
      <Description>
        A meta era criar um jogo funcional onde dois jogadores pudessem alternar
        turnos, marcar X e O, e o jogo detectasse quando alguém ganhasse ou
        quando houvesse um empate.
      </Description>
      <div style={{ display: "flex", gap: "10px" }}>
        <Button action={() => navigate("/game")}>Iniciar Jogo</Button>
      </div>
    </Container>
  );
}
