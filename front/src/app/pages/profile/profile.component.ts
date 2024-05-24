import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

user=null;
constructor(public login:LoginService){}
  ngOnInit(): void {
   this.user=this.login.getuser();
  }
}
