import { IScenario } from "./../models/Scenario";
import { Game } from "../models/Game";

export class Instance {
  id: string;
  game!: Game;

  constructor(id: string) {
    this.id = id;
  }

  setScenario(scenario: IScenario): void {
    this.game = new Game(scenario);
  }
}
