import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private authenticated = false;
  private adminAuthenticated = false;

  private authenticatedSubject = new BehaviorSubject<boolean>(false);

  public isAuthenticated(): boolean {
    return this.authenticated;
  }

  public isAuthenticatedObservable(): Observable<boolean> {
    return this.authenticatedSubject.asObservable();
  }

  public isAdminAuthenticated(): boolean {
    return this.adminAuthenticated;
  }

  public Authenticate(email: string, _password: string): boolean {
    if (email === 'admin') {
      this.adminAuthenticated = true;
    } else {
      this.authenticated = true;
      this.authenticatedSubject.next(true);
    }

    return true;
  }
}
