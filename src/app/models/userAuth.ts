export interface IUserAuthData {
  status: string;
  jwt: string;
  name?: string;
  surname?: string;
  displayName?: string;
  email?: string;
  iat?: number;
  avatarUrl?: string;
}
