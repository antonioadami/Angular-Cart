import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    console.log(route.url);

    if (route.url[0].path === 'admin') {
      if (this.authService.isAdminAuthenticated()) {
        return true;
      } else {
        this.router.navigate(['login']);
        return false;
      }
    } else if (route.url[0].path === 'user') {
      if (this.authService.isAuthenticated()) {
        return true;
      } else {
        this.router.navigate(['login']);
        return false;
      }
    }

    return true;
  }
}
