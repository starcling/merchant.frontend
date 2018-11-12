import { User } from '@app/models/User';

export class HttpResponse {
  success: boolean;
  status: string;
  message: string;
  sessionID?: string;
  data?: any;
  token?: string;
  error?: string;
  user?: User;
  errcode?: string;
}
