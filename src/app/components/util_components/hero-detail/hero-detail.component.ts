import { Component, Input } from '@angular/core';
import { Hero } from './../../../interfaces/hero';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent {
  @Input() hero: Hero;
  damage = 0;
  iniDamage = 0;
  ignoreRs = false;

  dealDamage(damage): void {
    let effectiveRs = this.hero.rs;

    if (this.ignoreRs == true || damage < 0) {
      effectiveRs = 0;
    }

    if(damage > this.hero.wundschwelle + effectiveRs){
      let wundenCounter = ((damage-effectiveRs) / this.hero.wundschwelle) -1;
      for(let i = 0; i < wundenCounter; i++){
      this.hero.wunde++;
        for(let i=0; i < 2; i++){
          this.hero.AT--;
          this.hero.PA--;
          this.hero.ini--;
          this.hero.FK--;
        }
      this.hero.GS--;
      }
    }
    this.hero.hp -= (damage - effectiveRs);

    if(this.hero.hp < 0){
      this.hero.dead = true;
    }
    this.ignoreRs = false;
    this.damage = 0;
  }

  dealIniDamage(iniDamage): void {
        this.hero.ini -= iniDamage;
        this.iniDamage = 0;
        // => service.uodateLeben(index, änderung)index Zugriff(inidmg, index == Hero))
  }
}
