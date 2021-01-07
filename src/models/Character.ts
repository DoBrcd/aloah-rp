import { IWeapon } from "./Weapon";

export interface ICharacter {
  id: string;
  name: string;
  life: number;
  investigation: number;
  vigilance: number;
  atk: number;
  weapons: IWeapon[];
}
