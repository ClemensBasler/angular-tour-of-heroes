import { Hero } from '../interfaces/hero';

// hero.stat.current.hp
// max
// current
// phase/
// hero.status.max.hp
// hero.status.dead
// magic? geweiht? untot?

export const HEROES: Hero[] = [
  { name: 'Schlange 1',
    stat: {
      ini: 20, hp: 30,
      mr1: 7, mr2: 5, wundschwelle: 7,
      rs: 1,
      AT: 10, PA: 12, FK: 0, GS: 8,
      TP: {
        diceCounter: 1,
        diceArt: 6,
        bonusdmg: 5
      },
    },
    status: {
      wunde: 0,
      dead: false,
      onTurn: false
    }
   },
  { name: 'Schlange 2',
  stat: {
    ini: 20, hp: 30,
    mr1: 7, mr2: 5, wundschwelle: 7,
    rs: 1,
    AT: 10, PA: 12, FK: 0, GS: 8,
    TP: {
      diceCounter: 1,
      diceArt: 6,
      bonusdmg: 5
    },
  },
  status: {
    wunde: 0,
    dead: false,
    onTurn: false
  }
},
  { name: 'Liscom', stat: {
    ini: 20, hp: 30,
    mr1: 7, mr2: 5, wundschwelle: 7,
    rs: 1,
    AT: 10, PA: 12, FK: 0, GS: 8,
    TP: {
      diceCounter: 1,
      diceArt: 6,
      bonusdmg: 5
    },
  },
  status: {
    wunde: 0,
    dead: false,
    onTurn: false
  }},
  { name: 'Borbarad', stat: {
    ini: 20, hp: 30,
    mr1: 7, mr2: 5, wundschwelle: 7,
    rs: 1,
    AT: 10, PA: 12, FK: 0, GS: 8,
    TP: {
      diceCounter: 1,
      diceArt: 6,
      bonusdmg: 5
    },
  },
  status: {
    wunde: 0,
    dead: false,
    onTurn: false
  }},
  { name: 'Skelett 1', stat: {
    ini: 20, hp: 30,
    mr1: 7, mr2: 5, wundschwelle: 7,
    rs: 1,
    AT: 10, PA: 12, FK: 0, GS: 8,
    TP: {
      diceCounter: 1,
      diceArt: 6,
      bonusdmg: 5
    },
  },
  status: {
    wunde: 0,
    dead: false,
    onTurn: false
  }},
  { name: 'Eridon', stat: {
    ini: 20, hp: 30,
    mr1: 7, mr2: 5, wundschwelle: 7,
    rs: 1,
    AT: 10, PA: 12, FK: 0, GS: 8,
    TP: {
      diceCounter: 1,
      diceArt: 6,
      bonusdmg: 5
    },
  },
  status: {
    wunde: 0,
    dead: false,
    onTurn: false
  }},
  { name: 'Akja', stat: {
    ini: 20, hp: 30,
    mr1: 7, mr2: 5, wundschwelle: 7,
    rs: 1,
    AT: 10, PA: 12, FK: 0, GS: 8,
    TP: {
      diceCounter: 1,
      diceArt: 6,
      bonusdmg: 5
    },
  },
  status: {
    wunde: 0,
    dead: false,
    onTurn: false
  }},
  { name: 'Tharg', stat: {
    ini: 20, hp: 30,
    mr1: 7, mr2: 5, wundschwelle: 7,
    rs: 1,
    AT: 10, PA: 12, FK: 0, GS: 8,
    TP: {
      diceCounter: 1,
      diceArt: 6,
      bonusdmg: 5
    },
  },
  status: {
    wunde: 0,
    dead: false,
    onTurn: false
  }},
  { name: 'Borbarads Mudda',
  stat: {
    ini: 20, hp: 30,
    mr1: 7, mr2: 5, wundschwelle: 7,
    rs: 1,
    AT: 10, PA: 12, FK: 0, GS: 8,
    TP: {
      diceCounter: 1,
      diceArt: 6,
      bonusdmg: 5
    },
  },
  status: {
    wunde: 0,
    dead: false,
    onTurn: false
  } }
];
