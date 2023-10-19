import {Component, OnInit} from '@angular/core';
import {Card} from "../../models/card";
import {CardServices} from "../../services/card.services";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-parfums',
  templateUrl: './parfums.component.html',
  styleUrls: ['./parfums.component.scss']
})
export class ParfumsComponent implements OnInit{
  cardCategory: Card[] = [];
  constructor(private cardService : CardServices,
              private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.loadCards();
    //this.cardService.getLoadCardsByCategory(this.cardCategory$, 'MENAGE');
  }
  loadCards(): void {
    this.cardService.getAllCards().subscribe({
      next: data => {
        this.cardCategory = [...data].filter((card) => card.category == 'PARFUMS');
      },
    })
  }
}


