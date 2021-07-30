import { Component, OnInit,ElementRef,ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GetDirectorService } from '../fetch-api-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-all-director-card',
  templateUrl: './all-director-card.component.html',
  styleUrls: ['./all-director-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AllDirectorCardComponent implements OnInit {
   directors: any[]=[];
  constructor(
    public fetchApiData:GetDirectorService,
    public snackBar: MatSnackBar,
     public dialog: MatDialog,
     private elementRef:ElementRef,
     ) { }
   
  ngOnInit(): void {
    this.getDirectors();
  }
  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'yourColor';
  }
  getDirectors(): void{
    this.fetchApiData.getDirector().subscribe((resp:any)=>{
      this.directors= resp;
      console.log(this.directors);
      return this.directors;
    })
  }

}
