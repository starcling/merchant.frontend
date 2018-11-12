import { HttpRequest } from '@app/utils/web/HttpRequest';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '@app/services/authentication.service';

export class HttpDeleteRequest extends HttpRequest {
  public constructor(private http: HttpClient, private actionUrl: string, authService?: AuthenticationService) {
    super(authService);
  }

  public getResult(): Observable<any> {
    return this.http.delete(this.actionUrl, this.basicAuthorizationHeader());
  }
}
