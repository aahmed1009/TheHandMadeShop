import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    console.log('AuthGuard#canActivate called');
    if (!this.authService.isAuthenticated()) {
      console.log('User is not authenticated, redirecting to login');
      this.router.navigate(['/login']);
      return false;
    }

    const userRole = this.authService.getRole();
    console.log(`User is authenticated with role: ${userRole}`);

    if (route.data['role'] && !route.data['role'].includes(userRole)) {
      console.log('User role is not allowed for this route');
      // this.router.navigate([this.getDefaultRouteForRole(userRole)]); // This line is removed
      return false;
    }

    return true;
  }
}
