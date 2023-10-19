import {Component, OnDestroy, OnInit} from '@angular/core';
import {Card} from "../../models/card";
import {CardServices} from "../../services/card.services";
import {interval, Subject} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-alimentations',
  templateUrl: './alimentations.component.html',
  styleUrls: ['./alimentations.component.scss']
})
export class AlimentationsComponent implements OnInit{
  cardCategory: Card[] = [];
  isLoading: boolean = false;
  interval$ = interval(15000);
  private destroy$!: Subject<boolean>;

  constructor(private cardService : CardServices,
              private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.loadCards();
    //this.cardService.getLoadCardsByCategory(this.cardCategory$, 'ALIMENTATION');

  }
     loadCards(): void {
     this.cardService.getAllCards().subscribe({
      next: data => {
        this.cardCategory = [...data].filter((card) => card.category == 'ALIMENTATION');
        this.isLoading = true;
      },
    })
  }
}
