export class Hero {
  name: string;
  stat: {
    hp: number;
    rs: number;
    ini: number;
    mr1: number;
    mr2: number;
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
  };
  status: {
    dead: boolean;
    wunde: number;
    onTurn: boolean;
  }
}
