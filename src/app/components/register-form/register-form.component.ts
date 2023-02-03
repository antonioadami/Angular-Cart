import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ICreateUser } from 'src/app/models/ICreateUser';
import { CepService } from 'src/app/services/cep.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent {
  constructor(
    private cepService: CepService,
    private userService: UserService,
    private router: Router
  ) {}

  registerFormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),
    privacyPolicies: new FormControl(false, []),
    personalData: new FormControl(false, []),
    address: new FormGroup({
      cep: new FormControl('', [Validators.required]),
      street: new FormControl('', [Validators.required]),
      number: new FormControl('', [Validators.required]),
      complement: new FormControl('', []),
      neighborhood: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required])
    })
  });

  GetAddressByCep() {
    const cep = this.registerFormGroup.get('address')?.get('cep')?.value;

    if (cep) {
      this.cepService.getAddress(cep).subscribe((a) => {
        console.log(a);
        const address = this.registerFormGroup.get('address');
        address?.setValue({
          cep,
          city: a.city,
          state: a.state,
          neighborhood: a.neighborhood || '',
          street: a.street,
          complement: '',
          number: ''
        });
      });
    }
  }

  Validate() {
    if (this.registerFormGroup.valid) {
      const data = this.registerFormGroup.getRawValue() as ICreateUser;
      if (data.confirmPassword !== data.password) {
        console.log(data.password);
        console.log(data.confirmPassword);

        alert('Passwords must be equal');
        return;
      }

      delete data.confirmPassword;

      this.userService.createUser(data).subscribe(() => {
        this.router.navigate(['/login']);
      });
    }

    // this.validate.emit(this.cardFormGroup.valid);
  }
}
