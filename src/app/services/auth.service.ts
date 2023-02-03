import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IAuthResponse } from '../models/IAuthResponse';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private authenticatedSubject = new BehaviorSubject<boolean>(
    this.isAuthenticated()
  );

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
      const payload = { username, password };
      let localStorageKey = 'token';
      let localStorageKeyId = 'id';

      if (username === 'admin') {
        payload.username = environment.API_ADMIN_USER;
        payload.password = environment.API_ADMIN_PASSWORD;
        localStorageKey = 'adminToken';
        localStorageKeyId = 'adminId';
      }

      this.http
        .post<IAuthResponse>(`${environment.API_URL}/auth/login`, payload)
        .subscribe(
          (ans) => {
            localStorage.setItem(localStorageKey, ans.token);
            localStorage.setItem(localStorageKeyId, ans.id.toString());
            this.authenticatedSubject.next(true);
            resolve(ans.token);
          },
          (err) => {
            reject(err);
          }
        );
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
    localStorage.removeItem('id');
    this.authenticatedSubject.next(false);
  }

  public LogoutAdmin() {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminId');
  }
}
