import {Component, OnInit} from '@angular/core';
import {Card} from "../../models/card";
import {CardServices} from "../../services/card.services";
import {Router} from "@angular/router";
import {map, Observable, tap} from "rxjs";
import {FormBuilder, FormGroup, Validators, FormArray} from "@angular/forms";


@Component({
  selector: 'app-created-card',
  templateUrl: './created-card.component.html',
  styleUrls: ['./created-card.component.scss']
})
export class CreatedCardComponent implements OnInit{
  cardForm!: FormGroup;
  cardPrevious$!: Observable<Card>
  image!: FormArray;
  constructor(private cardService : CardServices,
              private formbuilder : FormBuilder,
              private router : Router,
              ) {}
  ngOnInit(): void {
    this.cardForm = this.formbuilder.group({
      title: [null,[Validators.required, Validators.minLength(5)]],
      description: [null,[Validators.required]],
      image: [null,[Validators.required]],
      category: [null,[Validators.required]]
    },
      {updateOn: 'blur'
    })
    this.cardPrevious$ = this.cardForm.valueChanges.pipe(
      map(formValue => ({
        id: 0,
        ...formValue,
      }))
    );
    this.cardForm.setValue({
      image: [].push()
    })
}
  onSubmitForm() {
    this.cardService.addCard(this.cardForm.value).pipe(
      tap(() => this.router.navigateByUrl('/home')
      )).subscribe();
  }
}
