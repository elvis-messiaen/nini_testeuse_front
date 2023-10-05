import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParfumsComponent } from './parfums.component';

describe('ParfumsComponent', () => {
  let component: ParfumsComponent;
  let fixture: ComponentFixture<ParfumsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParfumsComponent]
    });
    fixture = TestBed.createComponent(ParfumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
