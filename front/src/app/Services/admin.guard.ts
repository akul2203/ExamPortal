import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterOutlet, RouterStateSnapshot, UrlTree ,} from '@angular/router';
import { Observable } from 'rxjs';
import {Injectable} from '@angular/core';
import { LoginService } from './login.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn:'root'
})
export class adminGuard implements CanActivate{
  
  constructor(private login:LoginService, private router:Router,private snack:MatSnackBar){

  }

  
  
  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
     
      if(this.login.isLoggedIn() && this.login.getUserRole()=="ADMIN")
      {
        return true;
      }
      else
      this.router.navigate(['login']);

      this.snack.open("!! admin page not activated !!","☹️",{
        duration:5000
      });

      return false;



  }



 
};
