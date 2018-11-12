import { environment } from '@env/environment';

export class Constants {
  public static apiHost: string = environment.serverUrl;
  public static apiPrefix: string = environment.apiPrefix;

  public static SESSION_TTL: number = 30 * 60; // TTL seconds
  public static SESSION_RENEW_COUNTDOWN: number = 10; // in seconds
  public static USER_KEY: string = 'currentUser';
  public static MERCHANT_KEY: string = 'merchantInfo';
  public static TOKEN_KEY: string = 'jwt_token';
  public static API_KEY: string = 'pma-api-key';
  public static API_CALL_SOURCE_KEY: string = 'api-request-source';
  public static MOBILE_TOKEN_KEY: string = 'fcm-mobile-token';
  public static FCM_MOBILE_TOKEN_TEST: string = 'FIB7yfWA2LvYix2BkSAoBb6NLH9CAZ98';
}
