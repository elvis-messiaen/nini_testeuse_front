import {Component, OnInit} from '@angular/core';
import {CardServices} from "../services/card.services";
import {Observable} from "rxjs";
import {Card} from "../models/card";
import {ActivatedRoute, Route} from "@angular/router";

@Component({
  selector: 'app-detail-produit',
  templateUrl: './detail-produit.component.html',
  styleUrls: ['./detail-produit.component.scss']
})
export class DetailProduitComponent implements OnInit{
  card$!: Observable<Card>;
  constructor(private cardService : CardServices,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const cardId = +this.route.snapshot.params['id'];
    console.log(cardId + "  cardId");
    this.card$ = this.cardService.getCardById(cardId);
  }
}
