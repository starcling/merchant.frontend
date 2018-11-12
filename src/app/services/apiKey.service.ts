import { Injectable } from '@angular/core';
import { Constants } from '@app/app.constants';
import { Observable } from 'rxjs';
import { AuthenticationService } from '@app/services/authentication.service';
import { HttpClient } from '@angular/common/http';
import { HttpGetRequest } from '@app/utils/web/HttpGetRequest';

@Injectable({
  providedIn: 'root'
})
export class ApiKeyService {
  private actionUrl: string;

  public constructor(private http: HttpClient, private authService: AuthenticationService) {
    this.actionUrl = `${Constants.apiHost}${Constants.apiPrefix}auth/generate-api-key`;
  }

  public getApiKey(): Observable<any> {
    return new HttpGetRequest(this.http, this.actionUrl, this.authService).getResult();
  }
}
