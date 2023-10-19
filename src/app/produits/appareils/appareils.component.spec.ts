import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppareilsComponent } from './appareils.component';

describe('AppareilsComponent', () => {
  let component: AppareilsComponent;
  let fixture: ComponentFixture<AppareilsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppareilsComponent]
    });
    fixture = TestBed.createComponent(AppareilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
