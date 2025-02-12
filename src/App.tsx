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
import { useWindowSize } from "@uidotdev/usehooks";

function App() {
  const [selectedGenre,setSelectedGenre] = useState('');
  const window = useWindowSize();


  const onSelectedGenre= (genre:string)=>{
      setSelectedGenre(genre);
      
  }
 
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg:`"nav nav" "aside main"`
      }}
      spaceY={2}
      templateColumns={{
        base :'1fr',
        lg:"200px 1fr"

      }}
    >
      <GridItem area="nav">
       <NavBar/>
      </GridItem>

     <Show when={window.width! >875}>
     <GridItem area="aside" paddingRight={'5px'} >
        <GenreList onSelectedGenre={onSelectedGenre} />
      </GridItem>
     </Show>

      <GridItem area="main" >
        <GameGrid selectedgenre={selectedGenre}/>
      </GridItem>
    </Grid>
  );
}

export default App;
