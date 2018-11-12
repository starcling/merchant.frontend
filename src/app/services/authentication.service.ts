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
export interface Credentials {
  // Customize received credentials here
  email: string;
  token: string;
}

export interface LoginContext {
  email: string;
  password: string;
  remember?: boolean;
}
const credentialsKey = 'credentials';
@Injectable()
export class AuthenticationService {
  public actionUrl: string;
  public token: string;
  public user: any;
  private headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'api-request-source': 'portal'
  });
  private _credentials: Credentials | null;

  public constructor(private _http: HttpClient, private _sessionService: SessionService) {
    this.actionUrl = `${Constants.apiPrefix}login`;
    console.log(Constants.apiHost, Constants.apiPrefix, this.actionUrl);
    // set token if saved in local storage
    this.token = this.getToken();

    const savedCredentials = sessionStorage.getItem(credentialsKey) || localStorage.getItem(credentialsKey);
    if (savedCredentials) {
      this._credentials = JSON.parse(savedCredentials);
    }
  }

  public login(email: string, password: string): Observable<any> {
    return this._http.post(this.actionUrl, { email: email, password: password }, { headers: this.headers }).pipe(
      map((response: HttpResponse) => {
        const user: User = response.data.user;
        const token: string = response.token;

        this.token = token;

        // store username and jwt token in local storage to keep user logged in between page refreshes
        this.setLocalStorage(user, token);
        this._sessionService.startTimer();
        this.setCredentials(
          {
            email: user.email || '',
            token: token || ''
          },
          true
        );
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

  /**
   * Checks is the user is authenticated.
   * @return True if the user is authenticated.
   */
  isAuthenticated(): boolean {
    return !!this.credentials;
  }

  /**
   * Gets the user credentials.
   * @return The user credentials or null if the user is not authenticated.
   */
  get credentials(): Credentials | null {
    return this._credentials;
  }

  /**
   * Sets the user credentials.
   * The credentials may be persisted across sessions by setting the `remember` parameter to true.
   * Otherwise, the credentials are only persisted for the current session.
   * @param credentials The user credentials.
   * @param remember True to remember credentials across sessions.
   */
  private setCredentials(credentials?: Credentials, remember?: boolean) {
    this._credentials = credentials || null;

    if (credentials) {
      const storage = remember ? localStorage : sessionStorage;
      storage.setItem(credentialsKey, JSON.stringify(credentials));
    } else {
      sessionStorage.removeItem(credentialsKey);
      localStorage.removeItem(credentialsKey);
    }
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
