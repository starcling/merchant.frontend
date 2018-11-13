import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Shell } from '@app/shell/shell.service';
import { BillingComponent } from '@app/billing/billing.component';
import { BillingStep2Component } from '@app/billing/billing-step2/billing-step2.component';

const routes: Routes = [
  Shell.childRoutes([
    { path: '', redirectTo: '/billing', pathMatch: 'full' },
    { path: 'billing', component: BillingComponent },
    { path: 'billing/step2', component: BillingStep2Component }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillingRoutingModule {}
