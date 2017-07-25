import { Component, Input, OnInit } from '@angular/core';
import { Hero } from './../../../interfaces/hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit{
  @Input() hero: Hero;
  damage = 0;
  iniDamage = 0;
  ignoreRs = false;
  currenthp = 0;

  ngOnInit() {
    this.currenthp = this.hero.stat.hp;
  }

  dealDamage(damage): void {
    let effectiveRs = this.hero.stat.rs;

    // Effekitve Rüstung berechnen
    if (this.ignoreRs == true || damage < 0) {
      effectiveRs = 0;
    }

    // Wunden berechnen
    if(damage > this.hero.stat.wundschwelle + effectiveRs){
      let wundenCounter = ((damage-effectiveRs) / this.hero.stat.wundschwelle) -1;
      for(let i = 0; i < wundenCounter; i++){
      this.hero.status.wunde++;
        for(let i=0; i < 2; i++){
          this.hero.stat.AT--;
          this.hero.stat.PA--;
          this.hero.stat.ini--;
          this.hero.stat.FK--;
        }
      this.hero.stat.GS--;
      }
    }

    // Deals Damage
    this.hero.stat.hp -= (damage - effectiveRs);

    // if(this.hero.hp < this.hero.hp/2){
    //
    // }

    if(this.hero.stat.hp > 0){
      this.hero.status.dead = false;
    } else {
      this.hero.status.dead = true;
    }

    this.ignoreRs = false;
    this.damage = 0;
  }

  dealIniDamage(iniDamage): void {
        this.hero.stat.ini -= iniDamage;
        this.iniDamage = 0;
        // => service.uodateLeben(index, änderung)index Zugriff(inidmg, index == Hero))
  }
}
