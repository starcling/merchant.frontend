import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-billing-recurring-step3',
  templateUrl: './billing-recurring-step3.component.html',
  styleUrls: ['./billing-recurring-step3.component.scss']
})
export class BillingRecurringStep3Component implements OnInit {
  public model;
  constructor(private router: Router) {}

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
  }
  onSubmit(data) {
    console.log(this.model);
    if (data.value) {
      this.router.navigate(['billing/step4/recurring']);
    }
  }
}
