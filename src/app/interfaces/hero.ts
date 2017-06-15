export class Hero {
  name: string;
  hp: number;
  rs: number;
  ini: number;
  dead: boolean;
  mr1: number;
  mr2: number;
  wunde: number;
  wundschwelle: number;
  AT: number;
  PA: number;
  GS: number;
  FK: number;
  TP: {
    diceCounter: number;
    diceArt: number;
    bonusdmg: number;
  }
  onTurn: boolean;
}
