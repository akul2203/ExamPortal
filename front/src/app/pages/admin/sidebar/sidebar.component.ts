import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginService } from 'src/app/Services/login.service';
import { LogoutConfirmationDialogComponent } from 'src/app/components/logout-confirmation-dialog/logout-confirmation-dialog.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

constructor(private login:LoginService,public dialog: MatDialog
){}



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
