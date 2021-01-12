import { IWeapon } from "./Weapon";
import { EStatus } from "./Status";

export interface IEnemy {
    id: string;
    name: string;
    description: string;
    life: number;
    atk: number;
    weapons: IWeapon[];
}

export class Enemy {
    id: string;
    name: string;
    life: number;
    status!: EStatus[];
    weapons: IWeapon[];
    iEnemy: IEnemy;

    constructor(id: string, name: string, iEnemy: IEnemy) {
        this.id = id;
        this.name = name;
        this.iEnemy = iEnemy;
        this.life = this.iEnemy.life;
        this.weapons = this.iEnemy.weapons;
    }

    addLife(amount: number) {
        this.life += amount;
        if (this.life > this.iEnemy.life) {
            this.life = this.iEnemy.life;
        }
    }

    removeLife(amount: number) {
        this.life -= amount;
        if (this.life <= 0) {
            this.status.push(EStatus.DEAD);
        }
    }

    getDamage(dice: number) {
        return dice + this.iEnemy.atk + (this.weapons[0] ? this.weapons[0].atk : 0);
    }
}