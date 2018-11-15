import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-billing-step2',
  templateUrl: './billing-step2.component.html',
  styleUrls: ['./billing-step2.component.scss']
})
export class BillingStep2Component implements OnInit {
  model: any = {};
  constructor() {}

  ngOnInit() {}
  onSubmit() {
    console.log('Function submitted..');
  }
}
