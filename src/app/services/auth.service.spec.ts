import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = new AuthService();
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

  it('should log user in', () => {
    service.Authenticate('test@test.com', 'Password1234@');

    const auth = service.isAuthenticated();

    expect(auth).toBe(true);
  });
  it('should log admin in', () => {
    service.Authenticate('admin', 'admin');

    const auth = service.isAdminAuthenticated();

    expect(auth).toBe(true);
  });
});
