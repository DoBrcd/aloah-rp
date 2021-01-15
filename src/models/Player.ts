import { EStatus } from "./Status";
import { IWeapon } from "./Weapon";
import { ICharacter } from "./Character";
import { IItem } from "./Item";

export interface PlayerStat {
  playerName: string;
  name: string;
  life: number;
  atk: number;
  vigilance: number;
  investigation: number;
  weapons: IWeapon[];
  items: Record<string, IItem>;
}

export class Player {
  id: string;
  name: string;
  life: number;
  status: EStatus[];
  items: Record<string, IItem>;
  character: ICharacter;
  weapon!: IWeapon;

  constructor(id: string, name: string, character: ICharacter) {
    this.id = id;
    this.name = name;
    this.character = character;
    this.life = character.life;
    this.status = [];
    this.items = {};
  }

  getStats(): PlayerStat {
    return {
      playerName: this.name,
      name: this.character.name,
      life: this.life,
      atk: this.character.atk,
      vigilance: this.character.vigilance,
      investigation: this.character.investigation,
      weapons: this.character.weapons,
      items: this.items,
    };
  }

  addLife(amount: number): void {
    this.life += amount;
    if (this.life > this.character.life) {
      this.life = this.character.life;
    }
  }

  removeLife(amount: number): void {
    this.life -= amount;
    if (this.life <= 0) {
      this.status.push(EStatus.DEAD);
    }
  }

  getDamage(dice: number): number {
    return dice + this.character.atk + (this.weapon ? this.weapon.atk : 0);
  }

  getInvestigation(dice: number): number {
    return dice + this.character.investigation;
  }

  getVigilance(dice: number): number {
    return dice + this.character.vigilance;
  }

  addItem(item: IItem): void {
    this.items[item.id] = item;
  }

  removeItem(item: IItem): void {
    delete this.items[item.id];
  }
}
