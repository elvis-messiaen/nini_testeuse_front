import {Component, Input, OnInit, Output} from '@angular/core';
import {Location} from '@angular/common';
import {CardServices} from "../services/card.services";
import {Observable, Subscription} from "rxjs";
import {Card} from "../models/card";
import {ActivatedRoute, Route} from "@angular/router";

@Component({
  selector: 'app-detail-produit',
  templateUrl: './detail-produit.component.html',
  styleUrls: ['./detail-produit.component.scss']
})
export class DetailProduitComponent implements OnInit{
  card$!: Observable<Card>;
  cardIMG$!: Subscription;
  cards: Card | undefined;
  cardIMG!: Card;
  imageDefault!:string;
  @Input() card: Card | undefined;
  constructor(private cardService : CardServices,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit(): void {
    // on recupere l'id de la route
    window.scrollTo(0,0)
    const cardId = +this.route.snapshot.params['id'];
    this.card$ = this.cardService.getCardById(cardId);
    this.cardIMG$ = this.cardService.getCardById(cardId)
      .subscribe({
        next:(card) => {
          this.cardIMG = card;
          this.imageDefault = this.cardIMG.image[0];
          console.log(this.card$)
        }
    })

  }

  changeImage(i: number) {
    this.imageDefault = this.cardIMG.image[i];
  }
  backClicked() {
    this.location.back();
  }

  changeDetail(component: any, card$: Observable<Card>) {

  }
}
