import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpRequest } from '@app/utils/web/HttpRequest';
import { AuthenticationService } from '@app/services/authentication.service';
import { Constants } from '@app/app.constants';

export class HttpGetRequest extends HttpRequest {
  public constructor(private http: HttpClient, private actionUrl: string, authService?: AuthenticationService) {
    super(authService);
  }

  public getResult(): Observable<any> {
    return this.http.get(this.actionUrl, this.basicAuthorizationHeader());
  }
}
