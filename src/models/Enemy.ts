import { IWeapon } from "./Weapon";

export interface IEnemy {
    id: string;
    name: string;
    life: number;
    atk: number;
    weapons: IWeapon[];
}

export class Enemy {
    
}