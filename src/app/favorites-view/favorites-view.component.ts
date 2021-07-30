import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetAllMoviesService,DeleteToFavoritesService } from '../fetch-api-data.service';
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
    public fetchApiDataFavDel: DeleteToFavoritesService,
    public snackBar: MatSnackBar,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getUser();
  }
  getUser(): void {
    this.fetchApiData.getUser().subscribe((resp: any) => {
        this.user = resp;
        this.getMovies();
        console.log(this.user);
        return this.user;
      });
    }
    getMovies(): void {
      this.fetchApiDataMov.getAllMovies().subscribe((resp: any) => {
          this.movies = resp;
          this.filterFavorites();
        });
      }
      filterFavorites(): void {
        this.movies.forEach((movie: any) => {
          if (this.user.favoritesMovies.includes(movie._id)) {
            this.favorites.push(movie);
          }
        });
        return this.favorites;
      }
      removeFavorites(id: string,title:string): void {
        this.fetchApiDataFavDel.getDeleteToFavorites(id).subscribe(() => {
          this.snackBar.open(`${title} has been removed from your favorites!`, 'OK', {
            duration: 2000
          });
          setTimeout(function () {
            window.location.reload();
          }, 2000);
        });
      }
}
