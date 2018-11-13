import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Shell } from '@app/shell/shell.service';
import { BillingComponent } from '@app/billing/billing.component';


const routes: Routes = [
  Shell.childRoutes([
    { path: '', redirectTo: '/billing', pathMatch: 'full' },
    { path: 'billing', component: BillingComponent}
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillingRoutingModule { }
