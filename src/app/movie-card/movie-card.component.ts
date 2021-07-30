import { Component, OnInit } from '@angular/core';
import { GetAllMoviesService, GetFavoritesMovieService,AddToFavoritesService } from '../fetch-api-data.service';
import { MatDialog } from '@angular/material/dialog';
import { SynopsisViewComponent } from '../synopsis-view/synopsis-view.component';
import { GenreViewComponent } from '../genre-view/genre-view.component';
import { DirectorViewComponent } from '../director-view/director-view.component';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {
  movies: any[] = [];
  constructor(
    public fetchApiData: GetAllMoviesService,
    public fetchApiDataAdd:AddToFavoritesService,
    public snackBar: MatSnackBar,
    public dialog: MatDialog,
    ) { }

ngOnInit(): void {
  this.getMovies();
}

getMovies(): void {
  this.fetchApiData.getAllMovies().subscribe((resp: any) => {
      this.movies = resp;
      console.log(this.movies);
      return this.movies;
    });
  }
  showDescription(title:string, description: string,Rating:string): void{
    this.dialog.open(SynopsisViewComponent,{
      data:{title, description,Rating},
      width:"450px"
    })
  }
  showGenres(name:string,description:string): void{
    this.dialog.open(GenreViewComponent,{
      data:{name, description},
      width:"450px"
    })
  }
  showDirector(name:string):void {
    this.dialog.open(DirectorViewComponent,{
      data:{name},
      width:"450px"
    })
  }
  addToFavorites(movieID:string,title:string): void{
    this.fetchApiDataAdd.getAddToFavorites(movieID).subscribe(()=>{
      this.snackBar.open(`${title} has been added to your favorites!`, 'OK', {
        duration: 2000,
      })
    })
  }

}
