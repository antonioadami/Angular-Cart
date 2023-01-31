import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IAuthResponse } from '../models/IAuthResponse';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private authenticatedSubject = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {}

  public isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  public isAuthenticatedObservable(): Observable<boolean> {
    return this.authenticatedSubject.asObservable();
  }

  public isAdminAuthenticated(): boolean {
    return !!localStorage.getItem('adminToken');
  }

  public async Authenticate(
    username: string,
    password: string
  ): Promise<boolean> {
    const promise = new Promise<string>((resolve, reject) => {
      if (username === 'admin') {
        this.http
          .post<IAuthResponse>(`${environment.API_URL}/auth/login`, {
            username: environment.API_ADMIN_USER,
            password: environment.API_ADMIN_PASSWORD
          })
          .subscribe((ans) => {
            localStorage.setItem('adminToken', ans.token);
            resolve(ans.token);
          });
      } else {
        this.http
          .post<IAuthResponse>(`${environment.API_URL}/auth/login`, {
            username,
            password
          })
          .subscribe(
            (ans) => {
              localStorage.setItem('token', ans.token);
              this.authenticatedSubject.next(true);
              resolve(ans.token);
            },
            (err) => {
              reject(err);
            }
          );
      }
    });

    try {
      await promise;
      return true;
    } catch (err) {
      return false;
    }
  }

  public Logout() {
    localStorage.removeItem('token');
    this.authenticatedSubject.next(false);
  }

  public LogoutAdmin() {
    localStorage.removeItem('adminToken');
  }
}
