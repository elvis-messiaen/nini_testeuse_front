import {Component, Input, OnInit, Output} from '@angular/core';
import {Observable} from "rxjs";
import {Card} from "../../../models/card";
import {CardServices} from "../../../services/card.services";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-qualite',
  templateUrl: './qualite.component.html',
  styleUrls: ['./qualite.component.scss']
})
export class QualiteComponent implements OnInit{
  card: Card | undefined;
  constructor(private cardService : CardServices,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
}
