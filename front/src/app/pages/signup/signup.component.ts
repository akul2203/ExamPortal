import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {



  constructor(private userService: UserService, private snack:MatSnackBar) {}


  durationInSeconds = 5;

  public user = {
    username: '',
    userpassword: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  }
  
  clearform() {
    this.user = {
      username: '',
      userpassword: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: ''
    };
  }

  formSubmit() {
    if (
      this.user.username === "" || this.user.userpassword === "" ||
      this.user.firstName === "" || this.user.lastName === "" ||
      this.user.email === "" || this.user.phone === ""
    ) {
      this.snack.open("!! cheak all fields","👍ok",{
        direction:'ltr',
        duration:3000
      });
      return;
    }

    this.userService.addUser(this.user).subscribe(
      (data: any) => { // Specify the type for 'data'
        console.log(data);
      
        this.snack.open("Saved Successfully","🫡",{
          duration:3000
        });
      },
      (error: any) => { // Specify the type for 'error'
        console.log(error);
        console.log(this.user);
        this.snack.open("Something went wrong","☹️",{
          duration:3000
        });
      }

    )
  }

  
}
