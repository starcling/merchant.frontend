import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingModelOverviewComponent } from './billing-model-overview.component';

describe('BillingModelOverviewComponent', () => {
  let component: BillingModelOverviewComponent;
  let fixture: ComponentFixture<BillingModelOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BillingModelOverviewComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingModelOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
