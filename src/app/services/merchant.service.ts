import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from '@app/app.constants';
import { Observable } from 'rxjs';
import { HttpGetRequest } from '@app/utils/web/HttpGetRequest';
import { HttpDeleteRequest } from '@app/utils/web/HttpDeleteRequest';
import { UpdateMerchantDetails, CreateMerchantDetails } from '@app/models/Merchant';
import { HttpPutRequest } from '@app/utils/web/HttpPutRequest';
import { HttpPostRequest } from '@app/utils/web/HttpPostRequest';
import { AuthenticationService } from '@app/services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class MerchantService {
  private actionUrl: string;

  constructor(private http: HttpClient, private authService: AuthenticationService) {
    this.actionUrl = `${Constants.apiHost}${Constants.apiPrefix}merchant/`;
  }

  public getMerchantDetails(merchantID: string): Observable<any> {
    return new HttpGetRequest(this.http, this.actionUrl + merchantID, this.authService).getResultWithApiKey();
  }

  public deleteMerchant(merchantID: string): Observable<any> {
    return new HttpDeleteRequest(this.http, this.actionUrl + 'delete/' + merchantID).getResult();
  }

  public updateMerchant(merchantID: string, updateDetails: UpdateMerchantDetails): Observable<any> {
    return new HttpPutRequest(this.http, this.actionUrl + merchantID, updateDetails).getResult();
  }

  public createMerchant(createMerchantDetails: CreateMerchantDetails): Observable<any> {
    return new HttpPostRequest(this.http, this.actionUrl + 'create', createMerchantDetails).getResult();
  }
}
