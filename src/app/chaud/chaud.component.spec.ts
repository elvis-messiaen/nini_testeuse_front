import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaudComponent } from './chaud.component';

describe('ChaudComponent', () => {
  let component: ChaudComponent;
  let fixture: ComponentFixture<ChaudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChaudComponent]
    });
    fixture = TestBed.createComponent(ChaudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
