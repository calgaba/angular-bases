import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public usaNames : String[] = ['Ironman','Spiderman','Hulk','Thor'];
  public deletedHero? : String ='';

  deleteHero():void {
    this.deletedHero = this.usaNames.pop();
  }

}
