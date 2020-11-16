import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way',
  template: `
     Input Your Phone Number: <input type="text" #data [format]="'US'" [(ngModel)]="inputValue"/>
     <br/>
     <br/>
     <!--<app-rating [rating]='inputValue'></app-rating> -->
  `,
  styleUrls: ['./two-way.component.css']
})
export class TwoWayComponent {

  inputValue: string;

}
