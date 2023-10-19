import {Component, OnInit} from '@angular/core';
import {Card} from "../../models/card";
import {CardServices} from "../../services/card.services";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-appareils',
  templateUrl: './appareils.component.html',
  styleUrls: ['./appareils.component.scss']
})
export class AppareilsComponent implements OnInit{
  cardCategory: Card[] = [];
  constructor(private cardService : CardServices,
              private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.loadCards();
    //this.cardService.getLoadCardsByCategory(this.cardCategory$, 'APPAREILS');
  }
  loadCards(): void {
    this.cardService.getAllCards().subscribe({
      next: data => {
        this.cardCategory = [...data].filter((card) => card.category == 'APPAREILS');
      },
    })
  }
}
