import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillingRoutingModule } from '@app/billing/billing-routing.module';
import { BillingComponent } from '@app/billing/billing.component';
import { BillingStep4Component } from './billing-step4/billing-step4.component';
import { currencyPipe } from '@app/billing/currency.pipe';

@NgModule({
  declarations: [BillingComponent, BillingStep4Component, currencyPipe],
  imports: [CommonModule, BillingRoutingModule],
  providers: [currencyPipe]
})
export class BillingModule {}
