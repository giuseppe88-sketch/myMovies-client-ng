import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GetGenresService } from '../fetch-api-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-all-genre-view',
  templateUrl: './all-genre-view.component.html',
  styleUrls: ['./all-genre-view.component.scss']
})
export class AllGenreViewComponent implements OnInit {
   genres: any[]=[];
  constructor(
    public fetchApiData:GetGenresService,
    public snackBar: MatSnackBar,
     public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.getGenres();
    }
  
  getGenres(): void{
    this.fetchApiData.getGenres().subscribe((resp:any)=>{
      this.genres= resp;
      
      return this.genres;
    })
  }
}
