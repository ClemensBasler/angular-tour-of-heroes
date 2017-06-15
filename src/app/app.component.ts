import { Component, ChangeDetectionStrategy, OnInit} from '@angular/core';
import { Hero } from './interfaces/hero';

// beondere Kampfregeln, Counter, neue Kampfrunde, Bogen/Armbrust TP
// Stati farblich => Wunden
// GE sofort um 2 Punkte
// Neuer Feind/Held eintragen!!!!!!!!
// wer ist dran?
// vorher!! nach Ini sortieren => geht net
const HEROES: Hero[] = [
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
  { name: 'Schlange 2', hp: 30, rs: 1, ini: 20,  mr1: 7, mr2: 5, dead: false, wunde: 0, wundschwelle: 7, AT: 10, PA: 12, GS: 8, FK: 0,
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

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit{
  title = 'Tour of heroes!';
  heroes = HEROES;
  selectedHero: Hero;
  onTurn = Hero[0];
  
  turnOfHero: Hero;
  turn = 0;
  heroPos = 0;
  newPos = 0;

  ngOnInit() {
  this.heroes[this.turn].onTurn = true;

  for(let i = 0; i < this.heroes.length; i++){
    if(this.heroes[this.heroPos].ini < this.heroes[i].ini){
      this.heroPos = i;
    }
    console.log(this.heroPos);
    console.log(this.heroes[this.heroPos].name);
    }

    //
    // let self:any = this;
    // service.observable.subscribe((update:any) => {
    //   self.heroes = update.heroes;
    // })
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  nextFighter(){
    this.heroes[this.turn].onTurn = false;
    this.turn++;
    if(this.turn >= this.heroes.length){
      this.turn = 0;
    }
    this.heroes[this.turn].onTurn = true;

  for(let i = 0; i < this.heroes.length; i++){
    if(-this.heroes[this.heroPos].ini <= -this.heroes[i].ini){
      this.heroPos = i;
    }
    // this.heroPos = this.newPos;
    // this.newPos = 0;
    // -30 => -20 => -10
    //
    // Service => Liste Tauschen anhangd der Ini => bekommt imemr nur den aktuellen Stand der Liste
    // ngInit => sub auf Service => hat funktionen => udpate Ini für xy
    console.log(this.heroPos);
    console.log(this.heroes[this.heroPos].name);
    }
  }

}
