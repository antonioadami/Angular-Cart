import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFormComponent } from './login-form.component';
import { AuthService } from 'src/app/services/auth.service';
import { AppModule } from 'src/app/app.module';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;
  let service: AuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginFormComponent],
      imports: [AppModule]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    service = TestBed.inject(AuthService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should log user in', () => {
    component.loginFormGroup.setValue({
      email: 'teste@teste.com',
      password: 'Password1234@'
    });
    component.Validate();

    const auth = service.isAuthenticated();
    expect(auth).toBeTruthy();
  });

  it('should log admin in', () => {
    component.loginFormGroup.setValue({
      email: 'admin',
      password: 'admin'
    });
    component.Validate();

    const auth = service.isAdminAuthenticated();
    expect(auth).toBeTruthy();
  });
});
