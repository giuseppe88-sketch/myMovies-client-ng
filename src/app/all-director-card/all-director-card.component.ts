import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GetDirectorService } from '../fetch-api-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-all-director-card',
  templateUrl: './all-director-card.component.html',
  styleUrls: ['./all-director-card.component.scss']
})
export class AllDirectorCardComponent implements OnInit {
   directors: any[]=[];
  constructor(
    public fetchApiData:GetDirectorService,
    public snackBar: MatSnackBar,
     public dialog: MatDialog,
     ) { }
   
  ngOnInit(): void {
    this.getDirectors();
  }
  getDirectors(): void{
    this.fetchApiData.getDirector().subscribe((resp:any)=>{
      this.directors= resp;
      console.log(this.directors);
      return this.directors;
    })
  }

}
