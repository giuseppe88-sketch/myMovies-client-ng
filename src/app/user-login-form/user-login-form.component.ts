import { Component, OnInit, Input } from '@angular/core';

// You'll use this import to close the dialog on success
import { MatDialogRef } from '@angular/material/dialog';

// This import brings in the API calls we created in 6.2
import { UserLoginService } from '../fetch-api-data.service';

// This import is used to display notifications back to the user
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login-form',
  templateUrl: './user-login-form.component.html',
  styleUrls: ['./user-login-form.component.scss']
})
export class UserLoginFormComponent implements OnInit {

  @Input() userData = { username: '', password: ''};

  constructor(
    public fetchApiData: UserLoginService,
    public dialogRef: MatDialogRef<UserLoginFormComponent>,
    public snackBar: MatSnackBar,
    public router: Router
    ) { }

ngOnInit(): void {}

loginUser(): void {
  this.fetchApiData.userLogin(this.userData).subscribe((response) => {
    this.dialogRef.close();
    console.log(response)
    localStorage.setItem('user', response.user.username);
    localStorage.setItem('token', response.token);
    this.snackBar.open(response, 'OK', {
      duration: 2000
    });
    this.router.navigate(['movies']);
  }, (response) => {
    console.log(response)

    this.snackBar.open(response, 'OK', {
      duration: 2000
    });
  });
}
}
