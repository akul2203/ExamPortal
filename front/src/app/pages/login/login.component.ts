import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  logindata={

    userName:'',
    password:''
  };

  constructor(private snack:MatSnackBar,private login:LoginService,private router:Router)
  {

  }
  ngOnInit(): void {
    localStorage.clear()
  }

  formSubmit()
  {
 
    if(this.logindata.userName.trim()==="")
    {

      this.snack.open(" **Username is required !!","☹️",{
        duration:3000
      });
      return;
    }

    if(this.logindata.password.trim()==="")
    {

      this.snack.open("**Password is required !!","☹️",{
        duration:3000
      });
      return;
    }

    // //request server to generate token
    // this.login.generateToken(this.logindata).subscribe(
    //   (data: any) =>{
    //     console.log('success at logincomponent.td ');
    //     console.log(data);
    //   },
    //   (error)=>{
    //     console.log('error at logincomponent.td  ');
    //     console.log(error);
    //   }
    // );
    this.login.generateToken(this.logindata).subscribe(
      (data: any) => { // Specify the type for 'data'
        console.log(data);
        this.snack.open(" login Saved Successfully","🫡",{
          duration:3000

        });

        
          //login.....
          this.login.loginUser(data.token);         
          this.login.getCurrentUser().subscribe(
            (user:any)=>{
              this.login.setUser(user);
              console.log(user);

              // redirect admin and normal user
              if(this.login.getUserRole()=='ADMIN')
              {
                  window.location.href='/admin';
                 // this.router.navigate(['admin']);
              }
              else if(this.login.getUserRole()=='NORMAL'){
                    window.location.href='/user-dashboard/0';
                 // this.router.navigate(['user-dashboard']);
              }
              else{
                this.login.logout();
              }

            });
          
      },
      (error: any) => { // Specify the type for 'error'
        console.log(error);
        console.log(this.logindata);
        this.snack.open("**Something went wrong","☹️",{
          duration:3000
        });
      }
    )
  }
}
