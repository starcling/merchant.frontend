import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpGetRequest } from '@app/utils/web/HttpGetRequest';
import { Constants } from '@app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class EmailVerificationService {
  private actionUrl: string;

  public constructor(private http: HttpClient) {
    this.actionUrl = `${Constants.apiHost}${Constants.apiPrefix}validateHash/`;
  }

  public verifyHash(hash: string): Observable<any> {
    return new HttpGetRequest(this.http, this.actionUrl + hash).getResult();
  }
}
