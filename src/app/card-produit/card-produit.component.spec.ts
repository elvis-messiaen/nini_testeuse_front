import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProduitComponent } from './card-produit.component';

describe('CardProduitComponent', () => {
  let component: CardProduitComponent;
  let fixture: ComponentFixture<CardProduitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardProduitComponent]
    });
    fixture = TestBed.createComponent(CardProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
