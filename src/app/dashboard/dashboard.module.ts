import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from '@app/dashboard/dashboard.component';
import { NgxQRCodeModule } from 'ngx-qrcode2';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, DashboardRoutingModule, NgxQRCodeModule]
})
export class DashboardModule {}
