import { environment } from '@env/environment';

export class Constants {
  public static apiHost: string = environment.serverUrl;
  public static apiPrefix: string = environment.apiPrefix;

  public static SESSION_TTL: number = 30 * 60; // TTL seconds
  public static SESSION_RENEW_COUNTDOWN: number = 10; // in seconds
  public static USER_KEY: string = 'currentUser';
  public static MERCHANT_KEY: string = 'merchantInfo';
  public static TOKEN_KEY: string = 'jwt_token';
}
