import Container from "../components/ui/container";
import Grid from "../modules/game/grid";
import Scoreboard from "../modules/game/scoreboard";

export default function Game() {
  return (
    <Container>
      <Scoreboard />
      <Grid />
    </Container>
  );
}
