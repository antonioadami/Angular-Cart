import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  loginFormGroup = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  constructor(private authService: AuthService, private router: Router) {}

  async Validate() {
    const email = this.loginFormGroup.get('email')?.value;
    const password = this.loginFormGroup.get('password')?.value;

    if (email && password) {
      const authenticated = await this.authService.Authenticate(
        email,
        password
      );
      if (authenticated) {
        this.router.navigate(['/']);
      }
    }
  }
}
