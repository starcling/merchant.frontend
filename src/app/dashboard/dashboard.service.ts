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
  private treasuryAddressUrl;
  private transactionHistoryUrl;
  private etherscanUrl;

  private headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'api-request-source': 'portal',
    Authorization: localStorage.getItem('token')
  });

  constructor(private http: HttpClient) {
    this.actionUrl = `${Constants.apiHost}${Constants.apiPrefix}balance/all/`;
    this.treasuryAddressUrl = `${Constants.apiHost}${Constants.apiPrefix}address/treasury`;
    this.transactionHistoryUrl = `${Constants.apiHost}${Constants.apiPrefix}`;
    this.etherscanUrl = `https://etherscan.io/tx/0xd5bb7fe4284f34f33becb66f166d26f4bf8fcb97d0184c51b9b1d8604510bcba`;
  }
  public getPullPayment(): Observable<any> {
    return this.http.get(this.actionUrl, { headers: this.headers });
  }
  public getTreasuryAddress(): Observable<any> {
    return this.http.get(this.treasuryAddressUrl, { headers: this.headers });
  }
  public getTransactionHistory(): Observable<any> {
    return this.http.get(this.transactionHistoryUrl, { headers: this.headers });
  }
  public redirectToEtherscan(): Observable<any> {
    return this.http.get(this.etherscanUrl, { headers: this.headers });
  }
}
