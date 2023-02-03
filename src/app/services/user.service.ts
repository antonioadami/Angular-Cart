import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICreateUser } from '../models/ICreateUser';
import { IUser } from '../models/IUser';
import { IUsersResponse } from '../models/IUsersResponse';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) {}

  public createUser(user: ICreateUser): Observable<ICreateUser> {
    return this.http.post<ICreateUser>(`${environment.API_URL}/users/add`, {
      ...user,
      username: user.email
    });
  }

  public getUsers(): Observable<IUsersResponse> {
    return this.http.get<IUsersResponse>(`${environment.API_URL}/users`);
  }

  public getUserById(id: number): Observable<IUser> {
    return this.http.get<IUser>(`${environment.API_URL}/users/${id}`);
  }

  public updateUser(id: number, data: any) {
    return this.http.put<IUser>(`${environment.API_URL}/users/${id}`, data);
  }
}
