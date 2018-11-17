import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import { first } from 'rxjs/operators';
import { BillingServiceStep2 } from './billing-step2.service';
// import { publicDecrypt } from 'crypto';

@Component({
  selector: 'app-billing-step2',
  templateUrl: './billing-step2.component.html',
  styleUrls: ['./billing-step2.component.scss']
})
export class BillingStep2Component implements OnInit {
  model: any = {};
  constructor(private router: Router, private route: ActivatedRoute, private service: BillingServiceStep2) {}
  ngOnInit() {}
  onSubmit() {
    this.service.setValues(this.model);
    this.router.navigate(['/billing/step3']);
  }
}
