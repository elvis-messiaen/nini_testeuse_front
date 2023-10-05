import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiseriesComponent } from './confiseries.component';

describe('ConfiseriesComponent', () => {
  let component: ConfiseriesComponent;
  let fixture: ComponentFixture<ConfiseriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfiseriesComponent]
    });
    fixture = TestBed.createComponent(ConfiseriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
