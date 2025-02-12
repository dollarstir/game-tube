import { Image } from '@chakra-ui/react';
import action from '../assets/action.png'
import racing from '../assets/racing.png'
import shooter from '../assets/shooter.png'
import fighting from '../assets/fighting.png'
import social from '../assets/social.png'
import fantacy from '../assets/fantasy.png'
import defaultLogo from '../assets/logo.png'
import card from '../assets/card.png'
import sports from '../assets/sports.png'
import strategy from '../assets/strategy.png'

interface Props{
 genre:string;
}
function GenreLogo({genre}:Props) {
    const genreLogos = {
        Action: action,
        Racing: racing,
        Shooter: shooter,
        Fighting:fighting,
        Social:social,
        Fantasy:fantacy,
        'Card Game':card,
        Sports: sports,
        Strategy:strategy

      };
    
      const logo = genreLogos[genre as keyof typeof genreLogos ];
      
  return (
    <Image src={logo|| defaultLogo} height='2px' boxSize={"32px;"} borderRadius={8}/>
  )
}

export default GenreLogo