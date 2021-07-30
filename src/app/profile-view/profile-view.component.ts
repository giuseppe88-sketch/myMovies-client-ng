import { Component, OnInit,Input,Inject,ElementRef,ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { DeleteUserService, GetUserService } from '../fetch-api-data.service';
import { UserRegistrationService } from '../fetch-api-data.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ProfileUpdateComponent } from '../profile-update/profile-update.component';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileViewComponent implements OnInit {
     user: any =[];
     movies: any[] = [];

   
  constructor(
    public fetchApiData: GetUserService,
    public fetchApiDataUpdate: UserRegistrationService,
    public fetchApiDataDelete: DeleteUserService,
    public router: Router,
   public snackBar: MatSnackBar,
   public dialog: MatDialog,
   private elementRef:ElementRef,

  ) { }
 
  ngOnInit(): void {
   this.getUser();
   
  }
  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'yourColor';
  }
  getUser(): void {
    this.fetchApiData.getUser().subscribe((resp: any) => {
        this.user = resp;
        console.log(this.user);
        return this.user;
      });
    }
    openUpdateDialog(): void {
      this.dialog.open(ProfileUpdateComponent, {
        width: '280px'
      });
    }
    deleteUser(): void{
      this.fetchApiDataDelete.getDeleteUserService().subscribe((resp:any)=>{
        localStorage.removeItem('user');
        localStorage.removeItem('token');
      this.snackBar.open(
        "Profile has been deleted", "Ok", {
          duration: 2000,
      })
      setTimeout(function() {
        window.location.reload();
      }, 1000);
    });
    this.router.navigate(['welcome']);
  }
    
}
