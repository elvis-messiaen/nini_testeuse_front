import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoutComponent } from './gout.component';

describe('GoutComponent', () => {
  let component: GoutComponent;
  let fixture: ComponentFixture<GoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GoutComponent]
    });
    fixture = TestBed.createComponent(GoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
