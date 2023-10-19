import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FroideComponent } from './froide.component';

describe('FroideComponent', () => {
  let component: FroideComponent;
  let fixture: ComponentFixture<FroideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FroideComponent]
    });
    fixture = TestBed.createComponent(FroideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
