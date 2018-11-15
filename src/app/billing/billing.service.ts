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
  public token: string;
  public user: any;
  public userID: string;
  private headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'api-request-source': 'portal'
  });
  constructor(private _http: HttpClient) {
    //this.userID = localStorage.getItem('merchantID');
    this.actionUrl = `${Constants.apiPrefix}pull-payment-models/`;
    //localStorage.removeItem('merchantID');
  }

  public Getpull(): Observable<any> {
    return this._http.get(this.actionUrl, { headers: this.headers });
  }
}
