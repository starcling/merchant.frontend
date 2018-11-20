import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpResponse } from '@app/utils/web/models/HttpResponse';
import { Constants } from '@app/app.constants';
import { map } from 'rxjs/operators';
import { User } from '@app/models/User';

@Injectable({
  providedIn: 'root'
})
export class BillingService {
  public actionUrl: string;
  public actionUrl1: string;
  public billingModelUrl: string;
  public token: string;
  public user: any;
  public userID: string;
  private headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'api-request-source': 'portal'
  });
  constructor(private _http: HttpClient) {
    this.actionUrl = `${Constants.apiPrefix}pull-payment-models/`;
    this.actionUrl1 = `${Constants.apiPrefix}balance/all/`;
    this.billingModelUrl = `${Constants.apiPrefix}pull-payment-models/id`;
  }

  public Getpull(): Observable<any> {
    console.log('API Hit GET');
    return this._http.get(this.actionUrl, { headers: this.headers });
  }
  public Deletepull(data): Observable<any> {
    console.log('API Hit');
    return this._http.delete(this.actionUrl + data, { headers: this.headers });
  }
  public getPullPayment(): Observable<any> {
    console.log('url', this.actionUrl);
    return this._http.get(this.actionUrl1, { headers: this.headers });
  }
  public getByIdBillingModel(id): Observable<any> {
    console.log('url', this.billingModelUrl);
    return this._http.get(this.billingModelUrl + id, { headers: this.headers });
  }
}
