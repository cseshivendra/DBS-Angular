import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnChanges {

  stars =[];
  halfStar: boolean;
  @Input ('rating') rating;

  ngOnInit(): void {
    this.displayStars();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.displayStars();
  }

  displayStars(){
    if(this.rating){
      const wholeNumber = Math.floor(this.rating);
      this.stars = Array(wholeNumber).fill(0);
      console.log(`The size of array is ${this.stars.length}`)
      this.halfStar = this.rating - wholeNumber > 0;
    }else {
      this.stars = Array(0).fill(0);
      this.halfStar = false;
    }
  }
}
