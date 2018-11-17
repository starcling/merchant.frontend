import { Component, OnInit } from '@angular/core';
import { BillingStep1Component } from '@app/billing/billing-step1/billing-step1.component';
import { BillingServiceStep1 } from '../billing-step1/billing-step1.service';
import { BillingServiceStep2 } from '../billing-step2/billing-step2.service';
import { BillingServiceStep3 } from '../billing-step3/billing-step3.service';
import { BillingServiceCall } from './billing-step4.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-billing-step4',
  templateUrl: './billing-step4.component.html',
  styleUrls: ['./billing-step4.component.scss']
})
export class BillingStep4Component implements OnInit {
  data1: any = {};
  data2: any = {};
  data3: any = {};
  data: any = {};
  constructor(
    private router: Router,
    private service1: BillingServiceStep1,
    private service2: BillingServiceStep2,
    private service3: BillingServiceStep3,
    private service4: BillingServiceCall
  ) {}
  ngOnInit() {
    this.data1 = this.service1.model;
    this.data2 = this.service2.model;
    this.data3 = this.service3.model;
    let data = {
      merchantID: '4a17335e-bf18-11e8-a355-000000fb1459',
      title: this.data2.billingModelName,
      description: this.data2.billModelDes,
      amount: this.data3.amount,
      initialPaymentAmount: 0,
      trialPeriod: 0,
      currency: this.data3.rupees,
      numberOfPayments: 1,
      typeID: 1,
      frequency: 604800,
      networkID: 1,
      automatedCashOut: true,
      cashOutFrequency: 1
    };
    this.data = data;
  }

  publish() {
    this.service4.billingPost(this.data).subscribe(result => {
      if (result.success == true) {
        this.router.navigate(['/dashboard']);
      }
    });
  }

  onPublish() {
    this.publish();
  }
}
