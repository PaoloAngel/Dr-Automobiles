export interface IUserPayload {
  username: string;
  password: string;
  role: string;
}

export const mockUserPayload: IUserPayload = {
  username: 'admin',
  password: 'lee123',
  role: 'admin'
}
