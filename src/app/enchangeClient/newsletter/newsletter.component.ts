import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent implements OnInit{
  userEmail!:string;
  ngOnInit(): void {
  }

  onSubmitForm() {
    console.log(this.userEmail);
  }
}
