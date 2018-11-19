import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BillingRoutingModule } from '@app/billing/billing-routing.module';
import { BillingComponent } from '@app/billing/billing.component';
import { BillingStep4Component } from './billing-step4/billing-step4.component';
import { currencyPipe } from '@app/billing/currency.pipe';
import { BillingHybridStep3Component } from './billing-step3/billing-hybrid-step3/billing-hybrid-step3.component';
import { BillingModelOverviewComponent } from './billing-model-overview/billing-model-overview.component';

@NgModule({
  declarations: [
    BillingComponent,
    BillingStep4Component,
    currencyPipe,
    BillingHybridStep3Component,
    BillingModelOverviewComponent
  ],
  imports: [CommonModule, BillingRoutingModule, FormsModule],
  providers: [currencyPipe]
})
export class BillingModule {}
