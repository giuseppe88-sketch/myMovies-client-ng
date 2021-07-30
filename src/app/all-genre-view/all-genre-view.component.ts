import { Component, OnInit,ElementRef,ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GetGenresService } from '../fetch-api-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-all-genre-view',
  templateUrl: './all-genre-view.component.html',
  styleUrls: ['./all-genre-view.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AllGenreViewComponent implements OnInit {
   genres: any[]=[];
  constructor(
    public fetchApiData:GetGenresService,
    public snackBar: MatSnackBar,
     public dialog: MatDialog,
     private elementRef:ElementRef,
  ) { }

  ngOnInit(): void {
    this.getGenres();
    }
    ngAfterViewInit(){
      this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'yourColor';
    }
  getGenres(): void{
    this.fetchApiData.getGenres().subscribe((resp:any)=>{
      this.genres= resp;
      
      return this.genres;
    })
  }
}
