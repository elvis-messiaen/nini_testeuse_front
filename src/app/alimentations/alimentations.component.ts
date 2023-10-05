import {Component, Input, OnInit} from '@angular/core';
import {Card} from "../models/card";
import {CardServices} from "../services/card.services";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-alimentations',
  templateUrl: './alimentations.component.html',
  styleUrls: ['./alimentations.component.scss']
})
export class AlimentationsComponent implements OnInit{
  cardAlimentation$!: Observable<Card[]>;
  alimentations!:string;
  cards!:Observable<Card[]>
  constructor(private cardService : CardServices,
              private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.cards = this.cardService.getAllCards();

  }
}
