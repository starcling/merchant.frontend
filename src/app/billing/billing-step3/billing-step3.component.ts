import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-billing-step3',
  templateUrl: './billing-step3.component.html',
  styleUrls: ['./billing-step3.component.scss']
})
export class BillingStep3Component implements OnInit {
  model: any = {};
  public selectOption: any;
  constructor(private router: Router) {
    this.selectOption = [
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
        value: 4
      }
    ];
  }

  ngOnInit() {}
  onSubmit(data) {
    if (data.value) {
      this.router.navigate(['/billing/step4'], { queryParams: { billingAmount: this.model } });
    }
    return this.model;
  }
}
