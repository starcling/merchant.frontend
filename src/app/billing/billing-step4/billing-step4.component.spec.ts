import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingStep4Component } from './billing-step4.component';

describe('BillingStep4Component', () => {
  let component: BillingStep4Component;
  let fixture: ComponentFixture<BillingStep4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BillingStep4Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingStep4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
