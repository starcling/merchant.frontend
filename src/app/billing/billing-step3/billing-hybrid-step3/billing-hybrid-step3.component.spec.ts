import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingHybridStep3Component } from './billing-hybrid-step3.component';

describe('BillingHybridStep3Component', () => {
  let component: BillingHybridStep3Component;
  let fixture: ComponentFixture<BillingHybridStep3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BillingHybridStep3Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingHybridStep3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
