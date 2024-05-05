import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name : string = 'Ironman';
  public age : number = 45;

  //este tipo de metodos, se invocan como una propiedad en tiempo de ejecución
  get capitalizedName() : string {
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
    return `${ this.name } - ${ this.age }`;
  }

  changeHero():void {
     this.name = 'Superlopez';
  }

  changeAge():void {
     this.age = 66;
  }

  resetForm():void {
    this.name = 'Ironman';
    this.age = 45;
 }

}
