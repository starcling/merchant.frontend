import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Constants } from '@app/app.constants';
import { map } from 'rxjs/operators';

import { HttpResponse } from '@app/utils/web/models/HttpResponse';
import { Observable } from 'rxjs';
import * as jwt_decode from 'jwt-decode';
import { User } from '@app/models/User';
import { SessionService } from '@app/services/session.service';

export const TOKEN_KEY = Constants.TOKEN_KEY;
export const USER_KEY = Constants.USER_KEY;
export const API_KEY = Constants.API_KEY;

@Injectable()
export class AuthenticationService {
  public actionUrl: string;
  public token: string;
  public user: any;
  private headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'api-request-source': 'portal'
  });

  public constructor(private _http: HttpClient, private _sessionService: SessionService) {
    this.actionUrl = `${Constants.apiPrefix}login`;
    console.log(Constants.apiHost, Constants.apiPrefix, this.actionUrl);
    // set token if saved in local storage
    this.token = this.getToken();
  }

  public login(email: string, password: string): Observable<any> {
    return this._http.post(this.actionUrl, { email: email, password: password }, { headers: this.headers }).pipe(
      map((response: HttpResponse) => {
        const user: User = response.data;
        const token: string = response.token;

        this.token = token;

        // store username and jwt token in local storage to keep user logged in between page refreshes
        this.setLocalStorage(user, token);
        this._sessionService.startTimer();
        return response.success;
      })
    );
  }

  // clear token and remove user from local storage to log user out
  public logout(): Observable<any> {
    this.token = null;
    this._sessionService.stopTimer();
    const userKey = JSON.parse(localStorage.getItem(Constants.USER_KEY));
    this.removeLocalStorage();
    return this._sessionService.setSessionFree(userKey['userID']);
  }

  public createAuthorizationHeader(): HttpHeaders {
    let headers = new HttpHeaders();
    headers = headers.append('pma-user-token', this.getToken());
    headers = headers.append('Content-Type', 'application/json');

    return headers;
  }

  public createApiKeyHeader(): HttpHeaders {
    let headers = new HttpHeaders();
    headers = headers.append(API_KEY, this.getApiKey());
    headers = headers.append('Content-Type', 'application/json');

    return headers;
  }

  public removeLocalStorage(): void {
    localStorage.removeItem(USER_KEY);
    localStorage.removeItem(TOKEN_KEY);
  }

  public setLocalStorage(user: User, token?: string): void {
    if (token) {
      localStorage.setItem(TOKEN_KEY, JSON.stringify({ token }));
    }
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getToken(): string {
    const userToken = JSON.parse(localStorage.getItem(TOKEN_KEY));
    return userToken ? userToken.token : null;
  }

  public getApiKey(): string {
    const apiKey = localStorage.getItem(API_KEY);
    return apiKey ? apiKey : null;
  }

  public getUserData(): string {
    const userData = JSON.parse(localStorage.getItem(USER_KEY));
    return userData || null;
  }

  public isTokenExpired(token?: string): boolean {
    if (!token) {
      token = this.getToken();
    }
    if (!token) {
      return true;
    }

    const date = this.getTokenExpirationDate(token);
    if (!date || date === undefined) {
      return false;
    }

    return !(date.valueOf() > new Date().valueOf());
  }

  private getTokenExpirationDate(token: string): Date {
    const decoded = jwt_decode(token);
    if (decoded['exp'] === undefined) {
      return null;
    }

    const date = new Date(0);
    date.setUTCSeconds(decoded['exp']);

    return date;
  }
}
