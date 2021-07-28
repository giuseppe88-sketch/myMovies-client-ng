import { Component, OnInit } from '@angular/core';
import { GetAllMoviesService } from '../fetch-api-data.service';
import { MatDialog } from '@angular/material/dialog';
import { SynopsisViewComponent } from '../synopsis-view/synopsis-view.component';
import { GenreViewComponent } from '../genre-view/genre-view.component';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {
  movies: any[] = [];
  constructor(
    public fetchApiData: GetAllMoviesService,
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
  showDescription(title:string, description: string): void{
    this.dialog.open(SynopsisViewComponent,{
      data:{title, description},
      width:"450px"
    })
  }
  showGenres(name:string,description:string): void{
    this.dialog.open(GenreViewComponent,{
      data:{name, description},
      width:"450px"
    })
  }


}
