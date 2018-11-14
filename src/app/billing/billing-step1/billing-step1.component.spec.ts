import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingStep1Component } from './billing-step1.component';

describe('BillingStep1Component', () => {
  let component: BillingStep1Component;
  let fixture: ComponentFixture<BillingStep1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BillingStep1Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingStep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
