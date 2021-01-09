import { ICharacter } from "./Character";
import { IRoom } from "./Room";
import { IEnemy } from "./Enemy";

export interface IScenario {
  name: string;
  characters: ICharacter[];
  rooms: IRoom[];
  enemies: IEnemy[];
}
