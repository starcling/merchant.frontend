import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-billing-recurring-step3',
  templateUrl: './billing-recurring-step3.component.html',
  styleUrls: ['./billing-recurring-step3.component.scss']
})
export class BillingRecurringStep3Component implements OnInit {
  public model;
  public selectOption: any;
  public recurrenceOption = [];
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
    this.recurrenceOption = [
      {
        id: 1,
        label: 'Days',
        value: 0
      },
      {
        id: 2,
        label: 'Weeks',
        value: 1
      },
      {
        id: 3,
        label: 'Years',
        value: 2
      }
    ];
  }

  ngOnInit() {
    this.model = {
      rupees: '',
      amount: '',
      No1: '',
      No2: '',
      No3: '',
      Period1: '',
      Period2: ''
    };
    this.model.Period2 = this.recurrenceOption[0].label;
    this.model.Period1 = this.recurrenceOption[0].label;
    this.model.rupees = this.selectOption[0].label;
  }
  onSubmit(data) {
    console.log(this.model);
    if (data.value) {
      this.router.navigate(['billing/step4/recurring']);
    }
  }
}
