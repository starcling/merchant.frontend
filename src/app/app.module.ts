import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { environment } from '@env/environment';
import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { HomeModule } from '@app/home/home.module';

import { ShellModule } from '@app/shell/shell.module';
import { AboutModule } from '@app/about/about.module';
import { LoginModule } from '@app/login/login.module';
import { AppComponent } from '@app/app.component';
import { AppRoutingModule } from '@app/app-routing.module';

import { AuthenticationService } from '@app/services/authentication.service';
import { AlertModalService } from '@app/services/alert-modal.service';
import { ChangePasswordService } from '@app/services/change-password.service';
import { DashboardModule } from '@app/dashboard/dashboard.module';
import { BillingModule } from '@app/billing/billing.module';
import { BillingStep2Component } from './billing/billing-step2/billing-step2.component';
import { BillingStep1Component } from './billing/billing-step1/billing-step1.component';
import { BillingStep3Component } from './billing/billing-step3/billing-step3.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production }),
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot(),
    NgbModule,
    CoreModule,
    SharedModule,
    ShellModule,
    HomeModule,
    DashboardModule,
    BillingModule,
    AboutModule,
    LoginModule,
    AppRoutingModule // must be imported as the last module as it contains the fallback route
  ],
  declarations: [AppComponent, BillingStep2Component, BillingStep1Component, BillingStep3Component],
  providers: [
    AuthenticationService,
    AlertModalService,
    ChangePasswordService,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
