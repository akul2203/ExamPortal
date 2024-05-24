import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CategoriesService } from 'src/app/Services/categories.service';
import { LoginService } from 'src/app/Services/login.service';
import { LogoutConfirmationDialogComponent } from 'src/app/components/logout-confirmation-dialog/logout-confirmation-dialog.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usersidebar',
  templateUrl: './usersidebar.component.html',
  styleUrls: ['./usersidebar.component.css']
})
export class UsersidebarComponent implements OnInit {

  categories:any;
  constructor(private cat:CategoriesService,private login:LoginService,public dialog: MatDialog){}

  ngOnInit(): void {
    
    this.cat.categories().subscribe(
      (data:any)=>{

        this.categories=data;
      },
      (error:any)=>{
        Swal.fire('error', 'eror at usersidebar fetching categories', 'error');
      }

    )
  }

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
