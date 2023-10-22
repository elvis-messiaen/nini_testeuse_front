import { Component } from '@angular/core';
import {Card} from "../../../models/card";
import {CardServices} from "../../../services/card.services";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-packaging',
  templateUrl: './packaging.component.html',
  styleUrls: ['./packaging.component.scss']
})
export class PackagingComponent {
  card: Card | undefined;
  constructor(private cardService : CardServices,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
}
