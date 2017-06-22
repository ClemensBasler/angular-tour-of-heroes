import { Component, ChangeDetectionStrategy, OnInit} from '@angular/core';
import { Hero } from './../../../interfaces/hero';
import { HeroServiceService } from './../../../services/hero-service.service';

// beondere Kampfregeln, Counter, neue Kampfrunde, Bogen/Armbrust TP
// Stati farblich => Wunden
// GE sofort um 2 Punkte
// Neuer Feind/Held eintragen!!!!!!!!
// wer ist dran?
// vorher!! nach Ini sortieren => geht net

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [HeroServiceService]
})

export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  onTurn = Hero[0];

  turnOfHero: Hero;
  turn = 0;
  heroPos = 0;
  newPos = 0;

  constructor(private heroService: HeroServiceService){}

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
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
    }
  }

  ngOnInit(): void {
    this.getHeroes();
    // console.log(this.heroes[0]);
  //this.heroes[this.turn].onTurn = true;

  // for(let i = 0; i < this.heroes.length; i++){
  //   if(this.heroes[this.heroPos].ini < this.heroes[i].ini){
  //     this.heroPos = i;
  //     }
  //   }
    // let self:any = this;
    // service.observable.subscribe((update:any) => {
    //   self.heroes = update.heroes;
    // })
  }
}
