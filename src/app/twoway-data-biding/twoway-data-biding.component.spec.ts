import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwowayDataBidingComponent } from './twoway-data-biding.component';

describe('TwowayDataBidingComponent', () => {
  let component: TwowayDataBidingComponent;
  let fixture: ComponentFixture<TwowayDataBidingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwowayDataBidingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwowayDataBidingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
