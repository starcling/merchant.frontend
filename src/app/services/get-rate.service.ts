import { Injectable } from '@angular/core';
import { Constants } from '@app/app.constants';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpGetRequest } from '@app/utils/web/HttpGetRequest';

@Injectable({
  providedIn: 'root'
})
export class GetRateService {
  private actionUrl: string;

  public constructor(private http: HttpClient) {
    this.actionUrl = `${Constants.apiHost}${Constants.apiPrefix}pma-rate/`;
  }

  public getPmaRateEUR(): Observable<any> {
    return new HttpGetRequest(this.http, this.actionUrl + 'EUR/').getResultWithFCMMobileToken(
      Constants.FCM_MOBILE_TOKEN_TEST
    );
  }

  public getPmaRateUSD(): Observable<any> {
    return new HttpGetRequest(this.http, this.actionUrl + 'USD/').getResultWithFCMMobileToken(
      Constants.FCM_MOBILE_TOKEN_TEST
    );
  }

  public getPmaRateJPY(): Observable<any> {
    return new HttpGetRequest(this.http, this.actionUrl + 'JPY/').getResultWithFCMMobileToken(
      Constants.FCM_MOBILE_TOKEN_TEST
    );
  }
}
