import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillingRoutingModule } from '@app/billing/billing-routing.module';
import { BillingComponent } from '@app/billing/billing.component';
import { BillingStep4Component } from './billing-step4/billing-step4.component';

@NgModule({
  declarations: [BillingComponent, BillingStep4Component],
  imports: [CommonModule, BillingRoutingModule]
})
export class BillingModule {}
