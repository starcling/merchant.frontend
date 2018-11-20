import { Component, OnInit } from '@angular/core';
import { BillingServiceStep3 } from '../billing-step3.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-billing-hybrid-step3',
  templateUrl: './billing-hybrid-step3.component.html',
  styleUrls: ['./billing-hybrid-step3.component.scss']
})
export class BillingHybridStep3Component implements OnInit {
  model: any = {};
  public amountCurrency: any;
  public calendarlist: any;
  constructor(private router: Router, private service: BillingServiceStep3) {
    this.amountCurrency = [
      {
        id: 1,
        label: 'USD',
        value: 0
      },
      {
        id: 2,
        label: 'EUR',
        value: 1
      },
      {
        id: 3,
        label: 'GBP',
        value: 2
      },
      {
        id: 4,
        label: 'JPY',
        value: 3
      }
    ];
    this.calendarlist = [
      {
        id: 1,
        label: 'Day',
        value: 0
      },
      {
        id: 2,
        label: 'Month',
        value: 1
      },
      {
        id: 3,
        label: 'Year',
        value: 2
      }
    ];
    this.model.Currency = this.amountCurrency[0].label;
    this.model.calendar = this.calendarlist[0].label;
    this.model.PeriodCurrency = this.amountCurrency[0].label;
    this.model.billingcalendar = this.calendarlist[0].label;
  }

  ngOnInit() {}
  onSubmit(data) {
    if (data.value) {
      this.service.setValues(this.model);
      this.router.navigate(['billing/step4/hybrid']);
    }
  }
}
