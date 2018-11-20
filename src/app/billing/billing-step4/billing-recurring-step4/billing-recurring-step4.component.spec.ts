import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingRecurringStep4Component } from './billing-recurring-step4.component';

describe('BillingRecurringStep4Component', () => {
  let component: BillingRecurringStep4Component;
  let fixture: ComponentFixture<BillingRecurringStep4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BillingRecurringStep4Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingRecurringStep4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
