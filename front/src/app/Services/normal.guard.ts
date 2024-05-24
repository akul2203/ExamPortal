import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterOutlet, RouterStateSnapshot, UrlTree ,} from '@angular/router';
import { Observable } from 'rxjs';
import {Injectable} from '@angular/core';
import { LoginService } from './login.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn:'root'
})
export class normalGuard implements CanActivate{
  
  constructor(private login:LoginService, private router:Router,private snack:MatSnackBar){

  }

  
  
  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
     
      if(this.login.isLoggedIn() && this.login.getUserRole()=="NORMAL")
      {
        return true;
      }
      else
      this.router.navigate(['login']);
      this.snack.open("!! user page not actiavted !!","☹️",{
        duration:3000
      });

      return false;



  }



 
};
