import { Component, OnInit } from '@angular/core';
import { environment } from '@env/environment';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthenticationService } from '@app/services/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { I18nService } from '@app/core';
import { finalize } from 'rxjs/operators';
import { BillingService } from '@app/billing/billing.service';
import { currencyPipe } from '@app/billing/currency.pipe';
import { CurrencyPipe } from '@angular/common';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss'],
  providers: [CurrencyPipe, NgbModalConfig, NgbModal]
})
export class BillingComponent implements OnInit {
  public sample = [];
  version: string = environment.version;
  pullPaymentsBalance;
  pullPaymentsCurrency;
  error: string;
  loginForm: FormGroup;
  isLoading = false;
  submitted = false;
  show1: boolean;
  show2: boolean;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private i18nService: I18nService,
    config: NgbModalConfig,
    private modalService: NgbModal,
    // private authenticationService: AuthenticationService,
    private billingService: BillingService
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
    //this.createForm();
  }

  ngOnInit() {
    this.show1 = true;
    this.Getpull();
    this.getPullPayment();
  }

  open(content) {
    this.modalService.open(content);
  }
  open1(data) {
    this.modalService.open(data);
  }
  // open2(array) {
  //   //this.modalService.open(array);
  //   console.log("data", array.id);
  //   this.modalService.open(array);
  // }
  Saveclick() {
    console.log('button clicked');
  }
  Getpull() {
    console.log('GetAPI');
    this.billingService.Getpull().subscribe(result => {
      if (result.success == true) {
        console.log('GETsuccess', result);
        this.show1 = false;
        this.show2 = true;
        this.sample = result.data;
      } else {
        this.show1 = true;
        this.show2 = false;
      }
    });
  }

  deletePull(data) {
    console.log('delete start', data.id);
    this.billingService.Deletepull(data.id).subscribe(result => {
      console.log('delete2', result);
      if (result.success == true) {
        console.log('deleteif', result);
        this.Getpull();
      }
    });
  }
  getPullPayment() {
    this.isLoading = true;
    this.billingService.getPullPayment().subscribe(result => {
      console.log('response of pullPayment', result);
      this.pullPaymentsBalance = result.data.pullPayments.balance;
      this.pullPaymentsCurrency = result.data.pullPayment.currency;
    });
  }
}
