import { Component, OnInit, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { BillingServiceStep1 } from './billing-step1.service';

@Component({
  selector: 'app-billing-step1',
  templateUrl: './billing-step1.component.html',
  styleUrls: ['./billing-step1.component.scss']
})
export class BillingStep1Component implements OnInit {
  model: any = {};
  showerror: boolean;
  constructor(private router: Router, private service: BillingServiceStep1) {}

  ngOnInit() {}
  onSubmit(data) {
    if (!data.value.billing) {
      this.showerror = true;
    } else {
      this.showerror = false;
      this.service.setValues(this.model);
      this.router.navigate(['/billing/step2']);
    }
  }
}
