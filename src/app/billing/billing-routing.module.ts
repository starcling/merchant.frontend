import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Shell } from '@app/shell/shell.service';
import { BillingComponent } from '@app/billing/billing.component';
import { BillingStep2Component } from '@app/billing/billing-step2/billing-step2.component';
import { BillingStep1Component } from './billing-step1/billing-step1.component';
import { BillingStep3Component } from './billing-step3/billing-step3.component';
import { BillingStep4Component } from '@app/billing/billing-step4/billing-step4.component';
import { BillingRecurringStep3Component } from './billing-step3/billing-recurring-step3/billing-recurring-step3.component';
import { BillingHybridStep3Component } from './billing-step3/billing-hybrid-step3/billing-hybrid-step3.component';
import { BillingModelOverviewComponent } from './billing-model-overview/billing-model-overview.component';
import { BillingHybirdStep4Component } from './billing-step4/billing-hybird-step4/billing-hybird-step4.component';
import { BillingRecurringStep4Component } from './billing-step4/billing-recurring-step4/billing-recurring-step4.component';

const routes: Routes = [
  Shell.childRoutes([
    { path: '', redirectTo: '/billing', pathMatch: 'full' },
    { path: 'billing', component: BillingComponent },
    { path: 'billing/step2', component: BillingStep2Component },
    { path: 'billing/step1', component: BillingStep1Component },
    { path: 'billing/step3', component: BillingStep3Component },
    { path: 'billing/step4', component: BillingStep4Component },
    { path: 'billing/step3/recurring', component: BillingRecurringStep3Component },
    { path: 'billing/step3/hybrid', component: BillingHybridStep3Component },
    { path: 'billing/recurring/step4', component: BillingRecurringStep4Component },
    { path: 'billing/step4/hybrid', component: BillingHybirdStep4Component },
    { path: 'billing/billingmodeloverview', component: BillingModelOverviewComponent }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillingRoutingModule {}
