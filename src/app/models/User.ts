export interface User {
  userID: string;
  username: string;
  fullName: string;
  mobileNumber: string;
  salt: string;
  hash: string;
  temporatySalt: string;
  temporaryHash: string;
  email: string;
  completedRegistration: string;
  registrationDate: number;
  groupID: string;
  lockoutCounter: number;
  louckoutYN: boolean;
  verified: boolean;
  merchantID: string;
}

export interface UpdateUserDetails {
  fullName: string;
  mobileNumber: string;
  email: string;
  groupId: string;
  merchantID: string;
  verified: boolean;
  completedRegistration: boolean;
}

export interface CreateUser {
  userName: string;
  fullName: string;
  mobileNumber: string;
  email: string;
  password: string;
}
