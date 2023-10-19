import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedCardComponent } from './created-card.component';

describe('CreatedCardComponent', () => {
  let component: CreatedCardComponent;
  let fixture: ComponentFixture<CreatedCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatedCardComponent]
    });
    fixture = TestBed.createComponent(CreatedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
