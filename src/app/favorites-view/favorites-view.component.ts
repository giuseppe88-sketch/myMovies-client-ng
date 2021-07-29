import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetAllMoviesService, GetFavoritesMovieService,AddToFavoritesService } from '../fetch-api-data.service';
import { MatDialog } from '@angular/material/dialog';

import { MatSnackBar } from '@angular/material/snack-bar';
import { GetUserService } from '../fetch-api-data.service';
@Component({
  selector: 'app-favorites-view',
  templateUrl: './favorites-view.component.html',
  styleUrls: ['./favorites-view.component.scss']
})
export class FavoritesViewComponent implements OnInit {
  favorites: any = [];
  user: any = {};
  movies: any= [];
  constructor(
    public router:Router,
    public fetchApiData: GetUserService,
    public fetchApiDataMov: GetAllMoviesService,
    public snackBar: MatSnackBar,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getUser();
  }
  getUser(): void {
    this.fetchApiData.getUser().subscribe((resp: any) => {
        this.user = resp;
        console.log(this.user);
        return this.user;
      });
    }
  
}
