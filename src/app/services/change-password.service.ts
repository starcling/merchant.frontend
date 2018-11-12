import { Injectable } from '@angular/core';
import { Constants } from '@app/app.constants';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpPostRequest } from '@app/utils/web/HttpPostRequest';
import { ChangePassword, TemporaryLogin } from '@app/models/PasswordReset';

@Injectable({
  providedIn: 'root'
})
export class ChangePasswordService {
  private actionUrl: string;

  public constructor(private http: HttpClient) {
    this.actionUrl = `${Constants.apiHost}${Constants.apiPrefix}reset/`;
  }

  public authenticateTemporaryPassword(temporaryDetails: TemporaryLogin): Observable<any> {
    return new HttpPostRequest(this.http, this.actionUrl + 'confirm/', temporaryDetails).getResult();
  }

  public changePassword(newPassword: ChangePassword): Observable<any> {
    return new HttpPostRequest(this.http, this.actionUrl + 'new-password/', newPassword).getResult();
  }

  public requestPasswordReset(email: string): Observable<any> {
    return new HttpPostRequest(this.http, this.actionUrl, { email: email }).getResult();
  }
}
