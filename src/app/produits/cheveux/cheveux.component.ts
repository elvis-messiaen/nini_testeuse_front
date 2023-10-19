import {Component, OnInit} from '@angular/core';
import {Card} from "../../models/card";
import {CardServices} from "../../services/card.services";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-cheveux',
  templateUrl: './cheveux.component.html',
  styleUrls: ['./cheveux.component.scss']
})
export class CheveuxComponent implements OnInit{
  cardCategory: Card[] = [];
  constructor(private cardService : CardServices,
              private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.loadCards();
    //this.cardService.getLoadCardsByCategory(this.cardCategory$, 'CHEVEUX');
  }
  loadCards(): void {
    this.cardService.getAllCards().subscribe({
      next: data => {
        this.cardCategory = [...data].filter((card) => card.category == 'CHEVEUX');
      },
    })
  }
}
