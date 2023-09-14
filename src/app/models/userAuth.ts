export interface IUserAuthData {
  status: string;
  name: string;
  surname: string;
  displayName: string;
  email: string;
  iat: number;
}

export interface IJwt {
  jwt: string;
}
