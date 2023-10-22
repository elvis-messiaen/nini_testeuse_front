import {Component, Input, OnInit} from '@angular/core';
import {Card} from "../models/card";
import {CardServices} from "../services/card.services";
import { Router} from "@angular/router";


@Component({
  selector: 'app-card-produit',
  templateUrl: './card-produit.component.html',
  styleUrls: ['./card-produit.component.scss']
})
export class CardProduitComponent implements OnInit{
  @Input() card!: Card;
  birthdate = Date();
  constructor(private cardService : CardServices,
              private router: Router) {}
  ngOnInit(): void {}

  handClickId() {
    this.router.navigateByUrl(`products/${this.card.id}`);
  }
  }
