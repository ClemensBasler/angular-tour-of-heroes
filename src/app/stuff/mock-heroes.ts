import { Hero } from '../interfaces/hero';

export const HEROES: Hero[] = [
  { name: 'Schlange 1',
    ini: 20, hp: 30,
    mr1: 7, mr2: 5, wundschwelle: 7,
    rs: 1, wunde: 0, AT: 10, PA: 12, FK: 0, GS: 8,
    dead: false,
    TP: {
      diceCounter: 1,
      diceArt: 6,
      bonusdmg: 5
    }, onTurn: false
   },
  { name: 'Schlange 2', hp: 30, rs: 1, ini: 20,  mr1: 7, mr2: 5, dead: false,
  wunde: 0, wundschwelle: 7, AT: 10, PA: 12, GS: 8, FK: 0,
  TP: {
    diceCounter: 1,
    diceArt: 6,
    bonusdmg: 5
  }, onTurn: false },
  { name: 'Liscom', hp: 30, rs: 1, ini: 20,  mr1: 7, mr2: 5, dead: false,
  wunde: 0, wundschwelle: 7, AT: 15, PA: 10, GS: 8, FK: 0,
  TP: {
    diceCounter: 1,
    diceArt: 6,
    bonusdmg: 5
  }, onTurn: false },
  { name: 'Borbarad', hp: 30, rs: 1, ini: 20,  mr1: 7, mr2: 5, dead: false,
  wunde: 0, wundschwelle: 7, AT: 14, PA: 11, GS: 8, FK: 0,
  TP: {
    diceCounter: 1,
    diceArt: 6,
    bonusdmg: 5
  }, onTurn: false },
  { name: 'Skelett 1', hp: 30, rs: 1, ini: 21,  mr1: 7, mr2: 5,
  dead: false, wunde: 0, wundschwelle: 7, AT: 12, PA: 12, GS: 8, FK: 0,
  TP: {
    diceCounter: 1,
    diceArt: 6,
    bonusdmg: 5
  }, onTurn: false },
  { name: 'Eridon', hp: 30, rs: 1, ini: 10,  mr1: 7, mr2: 5, dead: false,
  wunde: 0, wundschwelle: 7, AT: 10, PA: 12, GS: 8, FK: 0,
  TP: {
    diceCounter: 1,
    diceArt: 6,
    bonusdmg: 5
  }, onTurn: false },
  { name: 'Akja', hp: 30, rs: 1, ini: 10,  mr1: 7, mr2: 5,
  dead: false, wunde: 0, wundschwelle: 7, AT: 10, PA: 12, GS: 8, FK: 0,
  TP: {
    diceCounter: 1,
    diceArt: 6,
    bonusdmg: 5
  }, onTurn: false },
  { name: 'Tharg', hp: 30, rs: 1, ini: 10,  mr1: 7, mr2: 5, dead: false,
  wunde: 0, wundschwelle: 7, AT: 10, PA: 12, GS: 8, FK: 0,
  TP: {
    diceCounter: 1,
    diceArt: 6,
    bonusdmg: 5
  }, onTurn: false },
  { name: 'Borbarads Mudda', hp: 30, rs: 1, ini: 50,  mr1: 7, mr2: 5, dead: false,
  wunde: 0, wundschwelle: 7, AT: 10, PA: 12, GS: 8, FK: 0,
  TP: {
    diceCounter: 1,
    diceArt: 6,
    bonusdmg: 5
  }, onTurn: false }
];
