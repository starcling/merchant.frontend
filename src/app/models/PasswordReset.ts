export interface TemporaryLogin {
  temporaryPassword: string;
  hash: string;
}
export interface ChangePassword {
  newPassword: string;
  email: string;
}
