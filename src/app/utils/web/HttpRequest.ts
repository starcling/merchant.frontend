import { Observable } from 'rxjs';
import { AuthenticationService } from '@app/services/authentication.service';
import { HttpResponse } from '@app/utils/web/models/HttpResponse';

export abstract class HttpRequest {
  protected authService: AuthenticationService;

  protected constructor(authService?: AuthenticationService) {
    this.authService = authService;
    this.getAuthHeader();
  }

  private async getAuthHeader(): Promise<void> {
    if (this.authService) {
      await this.authService.getToken();
    }
  }
}
