import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoireComponent } from './histoire.component';

describe('HistoireComponent', () => {
  let component: HistoireComponent;
  let fixture: ComponentFixture<HistoireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistoireComponent]
    });
    fixture = TestBed.createComponent(HistoireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
