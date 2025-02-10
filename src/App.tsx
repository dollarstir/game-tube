import { useState } from "react";
import reactLogo from "./assets/react.svg";
import {
  Button,
  ButtonGroup,
  Grid,
  GridItem,
  HStack,
  Show,
} from "@chakra-ui/react";
import "./App.css";
import { RiArrowRightLine, RiMailLine } from "react-icons/ri";
import NavBar from "./components/NavBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Grid
      templateAreas={{
        base: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
       <NavBar/>
      </GridItem>

      <GridItem area="aside" bg="red">
        Aside
      </GridItem>

      <GridItem area="main  " bg="blue">
        nav
      </GridItem>
    </Grid>
  );
}

export default App;
