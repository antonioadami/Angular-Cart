import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  authenticated = false;
  adminAuthenticated = false;

  public isAuthenticated(): boolean {
    return this.authenticated;
  }

  public isAdminAuthenticated(): boolean {
    return this.adminAuthenticated;
  }

  public Authenticate(email: string, _password: string): boolean {
    if (email === 'admin') {
      this.adminAuthenticated = true;
    } else {
      this.authenticated = true;
    }

    return true;
  }
}
