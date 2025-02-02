import { User } from './user.model';
import { AuthData } from './auth-data.model';
export class AuthService {
  private user: User | null = null;
  registerUser(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString(),
    };
  }
  login(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString(),
    };
  }
  logOut() {
    this.user = null;
  }
  getUser() {
    return { ...this.user };
  }
  isAuth() {
    return this.user != null;
  }
}
