import { Component } from '@angular/core';
import {Card} from "../../../models/card";
import {CardServices} from "../../../services/card.services";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-gout',
  templateUrl: './gout.component.html',
  styleUrls: ['./gout.component.scss']
})
export class GoutComponent {
  card: Card | undefined;
  constructor(private cardService : CardServices,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log("GoutComponent")
    console.log(this.card);
  }
}
