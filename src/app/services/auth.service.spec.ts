import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { AuthService } from './auth.service';
// import { environment } from 'src/environments/environment';
// import { authResponseData } from '../mock/auth';
import { mockLocalStorage } from '../mock/localStorage';

describe('AuthService', () => {
  let service: AuthService;
  let httpController: HttpTestingController;
  // const API_URL = `${environment.API_URL}/auth/login`;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService],
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(AuthService);
    httpController = TestBed.inject(HttpTestingController);

    spyOn(localStorage, 'getItem').and.callFake(mockLocalStorage.getItem);
    spyOn(localStorage, 'setItem').and.callFake(mockLocalStorage.setItem);
    spyOn(localStorage, 'removeItem').and.callFake(mockLocalStorage.removeItem);
    spyOn(localStorage, 'clear').and.callFake(mockLocalStorage.clear);
  });

  afterEach(() => {
    httpController.verify();
    mockLocalStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should check if user is authenticated', () => {
    const auth = service.isAuthenticated();

    expect(auth).toBe(false);
  });

  it('should check if admin is authenticated', () => {
    const auth = service.isAdminAuthenticated();

    expect(auth).toBe(false);
  });

  // it('should log user in', () => {
  //   service.Authenticate('test@test.com', 'Password1234@');

  //   const auth = service.isAuthenticated();

  //   const http = httpController.expectOne(API_URL);

  //   expect(http.request.method).toBe('POST');
  //   expect(http.request.headers).toBeTruthy();

  //   http.flush(authResponseData);

  //   expect(auth).toBe(true);
  // });

  // it('should log admin in', () => {
  //   service.Authenticate('admin', 'admin');

  //   const auth = service.isAdminAuthenticated();

  //   const http = httpController.expectOne(API_URL);

  //   expect(http.request.method).toBe('POST');
  //   expect(http.request.headers).toBeTruthy();

  //   http.flush(authResponseData);

  //   expect(auth).toBe(true);
  // });
});
