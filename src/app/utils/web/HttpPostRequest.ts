import { Observable } from 'rxjs';
import { HttpRequest } from '@app/utils/web/HttpRequest';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from '@app/services/authentication.service';

export class HttpPostRequest extends HttpRequest {
  public constructor(
    private http: HttpClient,
    private actionUrl: string,
    private data: any,
    authService?: AuthenticationService
  ) {
    super(authService);
  }

  public getResult(): Observable<any> {
    return this.http.post(this.actionUrl, this.data, this.basicAuthorizationHeader());
  }
}
