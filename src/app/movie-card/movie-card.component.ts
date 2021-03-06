import { Component, OnInit,ElementRef,ViewEncapsulation} from '@angular/core';
import { GetAllMoviesService, GetFavoritesMovieService,AddToFavoritesService } from '../fetch-api-data.service';
import { MatDialog } from '@angular/material/dialog';
import { SynopsisViewComponent } from '../synopsis-view/synopsis-view.component';
import { GenreViewComponent } from '../genre-view/genre-view.component';
import { DirectorViewComponent } from '../director-view/director-view.component';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MovieCardComponent {
  movies: any[] = [];

   /**
   * 
   * @param fetchApiData
   * @param fetchApiDataAdd
   * @param snackBar
   * @param MatDialog
   * @param ElementRef
   */
  constructor(
    public fetchApiData: GetAllMoviesService,
    public fetchApiDataAdd:AddToFavoritesService,
    public snackBar: MatSnackBar,
    public dialog: MatDialog,
    private elementRef:ElementRef,
    ) { }

ngOnInit(): void {
  this.getMovies();
}
ngAfterViewInit(){
  this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'yourColor';
}

/**
 *  Return all the movies from the database
 */
getMovies(): void {
  this.fetchApiData.getAllMovies().subscribe((resp: any) => {
      this.movies = resp;
      console.log(this.movies);
      return this.movies;
    });
  }
  /**
 * this function return synopsis about the movies
 * @param title
 * @param description
 * @param Rating
 */
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

 /**
   * this function add movie to the favorites list
   * @param movieID 
   */
  addToFavorites(movieID:string,title:string): void{
    this.fetchApiDataAdd.getAddToFavorites(movieID).subscribe(()=>{
      this.snackBar.open(`${title} has been added to your favorites!`, 'OK', {
        duration: 2000,
      })
    })
  }

}
