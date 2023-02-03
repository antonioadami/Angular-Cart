import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { IUser } from 'src/app/models/IUser';
import { AuthService } from 'src/app/services/auth.service';
import { CepService } from 'src/app/services/cep.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user: IUser;

  faRightFromBracket = faRightFromBracket;

  formGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    newsletter: new FormControl(false, []),
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

  constructor(
    private userService: UserService,
    private cepService: CepService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userService
      .getUserById(parseInt(localStorage.getItem('id') as string))
      .subscribe((u) => {
        this.user = u;
        this.formGroup.setValue({
          firstName: u.firstName,
          email: u.email,
          newsletter: false,
          address: {
            cep: u.address.postalCode,
            city: u.address.city,
            complement: '',
            neighborhood: '',
            number: '',
            state: u.address.state,
            street: u.address.address
          }
        });
      });
  }

  Validate() {
    console.log('validate');
  }

  Logout() {
    this.authService.Logout();
    this.router.navigate(['/']);
  }

  GetAddressByCep() {
    const cep = this.formGroup.get('address')?.get('cep')?.value;

    if (cep) {
      this.cepService.getAddress(cep).subscribe((a) => {
        console.log(a);
        const address = this.formGroup.get('address');
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
}
