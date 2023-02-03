import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICepResponse } from '../models/ICepResponse';

@Injectable({ providedIn: 'root' })
export class CepService {
  constructor(private http: HttpClient) {}

  public getAddress(cep: string): Observable<ICepResponse> {
    return this.http.get<ICepResponse>(`${environment.CEP_URL}/${cep}`);
  }
}
