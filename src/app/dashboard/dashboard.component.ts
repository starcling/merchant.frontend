import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DashboardService } from './dashboard.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { Logger } from '@app/core';

const log = new Logger('Login');
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  isLoading = false;
  error: string;
  pullPaymentAmount;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    this.getPullPayment();
  }
  getPullPayment() {
    this.isLoading = true;

    this.dashboardService.getPullPayment().subscribe(result => {
      console.log('response of pullPayment', result);
      this.pullPaymentAmount = result.data.amount;
    });
  }
}
