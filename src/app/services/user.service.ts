import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from '@app/app.constants';
import { Observable } from 'rxjs';
import { HttpGetRequest } from '@app/utils/web/HttpGetRequest';
import { HttpDeleteRequest } from '@app/utils/web/HttpDeleteRequest';
import { HttpPutRequest } from '@app/utils/web/HttpPutRequest';
import { UpdateUserDetails, CreateUser } from '@app/models/User';
import { HttpPostRequest } from '@app/utils/web/HttpPostRequest';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private actionUrl: string;

  constructor(private http: HttpClient) {
    this.actionUrl = `${Constants.apiHost}${Constants.apiPrefix}user/`;
  }

  public createUser(createUserDetails: CreateUser): Observable<any> {
    return new HttpPostRequest(this.http, this.actionUrl, createUserDetails).getResult();
  }
  public deleteUserDetails(userID: string): Observable<any> {
    return new HttpDeleteRequest(this.http, this.actionUrl + 'delete/' + userID).getResult();
  }

  public updateUserDetails(userID: string, updateDetails: UpdateUserDetails): Observable<any> {
    return new HttpPutRequest(this.http, this.actionUrl + userID, updateDetails).getResult();
  }
}
