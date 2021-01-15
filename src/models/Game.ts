import { IScenario } from "./Scenario";
import { Player } from "./Player";

export class Game {
  scenario: IScenario;
  players: Player[] = [];

  constructor(scenario: IScenario) {
    this.scenario = scenario;
  }

  addPlayer(player: Player): void {
    this.players.push(player);
  }
}
