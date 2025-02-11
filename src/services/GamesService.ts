import { Game } from '../models/Game';
import ApiClient from './ApiClient'


   
   export function getGames(){
   const  controller = new AbortController();
        return ApiClient.get<Game[]>('/games',{signal:controller.signal});
    }
  

