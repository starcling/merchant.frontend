import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingStep2Component } from './billing-step2.component';

describe('BillingStep2Component', () => {
  let component: BillingStep2Component;
  let fixture: ComponentFixture<BillingStep2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BillingStep2Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
