import { HttpRequest } from '@app/utils/web/HttpRequest';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from '@app/services/authentication.service';

export class HttpPutRequest extends HttpRequest {
  public constructor(
    private http: HttpClient,
    private actionUrl: string,
    private data: any,
    authService?: AuthenticationService
  ) {
    super(authService);
  }

  public getResult(): Observable<any> {
    return this.http.put(this.actionUrl, this.data, this.basicAuthorizationHeader());
  }
}
