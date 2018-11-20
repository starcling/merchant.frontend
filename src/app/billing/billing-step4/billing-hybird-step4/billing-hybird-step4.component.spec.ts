import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingHybirdStep4Component } from './billing-hybird-step4.component';

describe('BillingHybirdStep4Component', () => {
  let component: BillingHybirdStep4Component;
  let fixture: ComponentFixture<BillingHybirdStep4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BillingHybirdStep4Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingHybirdStep4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
