import { User } from './product.interface';

export interface AuthResponse {
  user: User;
  token: string;
}
