import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { JwtClientService } from './jwt-client.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  //constructor for jwt service

constructor(private service:JwtClientService,private router:Router)

{
}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  
   /*if(this.service.isLoggedIn())

   {
     return true;
   }

   this.router.navigate(['login'])

      return false;*/

      if (this.service.getToken() && !this.service.isLoggedIn()) {
        return true;
      }
      else {
        this.router.navigate(['/login']);
        return false;
      }

  }

 

}

