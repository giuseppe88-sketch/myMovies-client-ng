import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';

// This import brings in the API calls we created in 6.2
import { UserRegistrationService } from '../fetch-api-data.service';

// This import is used to display notifications back to the user
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-profile-update',
  templateUrl: './profile-update.component.html',
  styleUrls: ['./profile-update.component.scss']
})
export class ProfileUpdateComponent implements OnInit {
  @Input() userData = { username: '', password: '', email: '', birthday: '' };
  constructor(
    public fetchApiData: UserRegistrationService,
    public dialogRef: MatDialogRef<ProfileUpdateComponent>,
    public snackBar: MatSnackBar,
    public router: Router,

  ) { }

  ngOnInit(): void {
  }
 updateUser(): void {
    this.fetchApiData.userRegistration(this.userData).subscribe((result) => {
  // Logic for a successful user registration goes here! (To be implemented)
     this.dialogRef.close(); // This will close the modal on success!
     console.log(result)
     this.snackBar.open(result, 'OK', {
        duration: 2000
     });
    }, (result) => {
      console.log(result)
      this.snackBar.open(result, 'OK', {
        duration: 2000
      });
    });
    this.router.navigate(['welcome']);
  }
}
