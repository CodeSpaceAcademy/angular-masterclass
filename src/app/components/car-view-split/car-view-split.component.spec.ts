import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarViewSplitComponent } from './car-view-split.component';

describe('CarViewSplitComponent', () => {
  let component: CarViewSplitComponent;
  let fixture: ComponentFixture<CarViewSplitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarViewSplitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarViewSplitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
