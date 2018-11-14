import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Constants } from '@app/app.constants';
import { Observable } from 'rxjs';
import { HttpGetRequest } from '@app/utils/web/HttpGetRequest';
import { HttpDeleteRequest } from '@app/utils/web/HttpDeleteRequest';
import { HttpPutRequest } from '@app/utils/web/HttpPutRequest';
import { PullPayment } from '@app/models/dashboard';
import { HttpPostRequest } from '@app/utils/web/HttpPostRequest';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private actionUrl: string;
  private headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'api-request-source': 'portal'
  });

  constructor(private http: HttpClient) {
    this.actionUrl = `${Constants.apiHost}${Constants.apiPrefix}pull-payment-models/`;
  }
  public getPullPayment(): Observable<any> {
    console.log('url', this.actionUrl);
    return this.http.get(this.actionUrl, { headers: this.headers });
  }
}
