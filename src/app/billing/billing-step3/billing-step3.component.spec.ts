import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingStep3Component } from './billing-step3.component';

describe('BillingStep3Component', () => {
  let component: BillingStep3Component;
  let fixture: ComponentFixture<BillingStep3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BillingStep3Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingStep3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
