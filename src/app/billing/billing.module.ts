import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillingRoutingModule } from '@app/billing/billing-routing.module';
import { BillingComponent } from '@app/billing/billing.component';

@NgModule({
  declarations: [BillingComponent],
  imports: [
    CommonModule,
    BillingRoutingModule
  ]
})
export class BillingModule { }
