import {Component, Input} from '@angular/core';
import {Card} from "../../../models/card";

@Component({
  selector: 'app-test-details',
  templateUrl: './test-details.component.html',
  styleUrls: ['./test-details.component.scss']
})
export class TestDetailsComponent {
  @Input() card: Card | undefined;

  changeDetail(component: any) {
    component.card = this.card;
  }
}
