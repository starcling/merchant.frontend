import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BillingServiceStep2 } from './billing-step2.service';
import { BillingServiceStep1 } from '../billing-step1/billing-step1.service';

@Component({
  selector: 'app-billing-step2',
  templateUrl: './billing-step2.component.html',
  styleUrls: ['./billing-step2.component.scss']
})
export class BillingStep2Component implements OnInit {
  model: any = {};
  datavalidation: any = {};
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: BillingServiceStep2,
    private billingdata: BillingServiceStep1
  ) {}
  ngOnInit() {
    this.datavalidation = this.billingdata.model;
  }
  onSubmit() {
    this.service.setValues(this.model);
    if (this.datavalidation.billing == 'Single') this.router.navigate(['/billing/step3']);
    else if (this.datavalidation.billing == 'Recurring') this.router.navigate(['/billing/step3/recurring']);
    else if (this.datavalidation.billing == 'Single and Recurring') this.router.navigate(['billing/step3/hybrid']);
  }
}
