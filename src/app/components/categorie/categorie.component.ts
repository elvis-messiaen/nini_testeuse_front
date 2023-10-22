import {Component, OnInit} from '@angular/core';
import {Slide} from "../../models/slide";
import {sliderData} from "../../api-slider";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.scss']
})
export class CategorieComponent implements OnInit {
  slide: Slide [] = sliderData;
  currentSlide: Slide = this.slide[0];

  interval!: Subscription;
  currentIndex: number = 0;
  constructor() { }
  ngOnInit() {
  }

  modeSlide() {
    if(this.slide.length -1 == this.currentIndex){
      console.log(this.currentIndex + 'fin du slide');
      this.currentIndex--;
      this.currentIndex = 0;
    }else if(this.currentIndex < this.slide.length - 1){
      this.currentIndex++;
     this.currentSlide = this.slide[this.currentIndex];
      console.log(this.currentIndex + '  ICI du slide');
    }

  }
}
