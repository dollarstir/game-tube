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
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

function App() {
 
  return (
    <Grid
      templateAreas={{
        base: `"nav nav" "aside main"`,
      }}
      spaceY={2}
    >
      <GridItem area="nav">
       <NavBar/>
      </GridItem>

      <GridItem area="aside" >
        <GenreList />
      </GridItem>

      <GridItem area="main" >
        <GameGrid/>
      </GridItem>
    </Grid>
  );
}

export default App;
