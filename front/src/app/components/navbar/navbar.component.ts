
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginService } from 'src/app/Services/login.service';
import { LogoutConfirmationDialogComponent } from '../logout-confirmation-dialog/logout-confirmation-dialog.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  islogins = false;
  users = null;
  role:string | undefined;

  constructor(public login: LoginService, public dialog: MatDialog) { }
  ngOnInit(): void {
    this.islogins = this.login.isLoggedIn();
    this.users = this.login.getuser();
    this.role=this.login.getUserRole()
    console.log(this.role+'hello')

  }

  // showLoginText = false; // Define the showLoginText property

  // onLoginIconEnter() {
  //   // Define the onLoginIconEnter method
  //   this.showLoginText = true; // Set showLoginText to true when mouse enters
  // }

  // onLoginIconLeave() {
  //   // Define the onLoginIconLeave method
  //   this.showLoginText = false; // Set showLoginText to false when mouse leaves
  // }

  openLogoutConfirmationDialog(): void {
    const dialogRef = this.dialog.open(LogoutConfirmationDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.login.logout();
        window.location.reload();
        console.log('User confirmed logout');
      } else {
        console.log('User canceled logout');
      }
    });
  }

}
