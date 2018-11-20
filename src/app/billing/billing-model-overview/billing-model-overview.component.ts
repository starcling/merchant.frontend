import { Component, OnInit } from '@angular/core';
import { BillingService } from '../billing.service';

@Component({
  selector: 'app-billing-model-overview',
  templateUrl: './billing-model-overview.component.html',
  styleUrls: ['./billing-model-overview.component.scss'],
  providers: [BillingService]
})
export class BillingModelOverviewComponent implements OnInit {
  public id;
  constructor(public service: BillingService) {}

  ngOnInit() {
    this.id = localStorage.getItem('publishId');
    this.service.getByIdBillingModel(this.id).subscribe(result => {
      console.log('result of overview', result);
    });
  }
}
