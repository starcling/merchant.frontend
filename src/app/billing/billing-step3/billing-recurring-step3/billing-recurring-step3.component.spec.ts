import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingRecurringStep3Component } from './billing-recurring-step3.component';

describe('BillingRecurringStep3Component', () => {
  let component: BillingRecurringStep3Component;
  let fixture: ComponentFixture<BillingRecurringStep3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BillingRecurringStep3Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingRecurringStep3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
