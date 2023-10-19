import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlimentationsComponent } from './alimentations.component';

describe('AlimentationsComponent', () => {
  let component: AlimentationsComponent;
  let fixture: ComponentFixture<AlimentationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlimentationsComponent]
    });
    fixture = TestBed.createComponent(AlimentationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
