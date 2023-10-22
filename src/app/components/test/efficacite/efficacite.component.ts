import { Component } from '@angular/core';
import {Card} from "../../../models/card";
import {CardServices} from "../../../services/card.services";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-efficacite',
  templateUrl: './efficacite.component.html',
  styleUrls: ['./efficacite.component.scss']
})
export class EfficaciteComponent {
  card: Card | undefined;
  constructor(private cardService : CardServices,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
}
