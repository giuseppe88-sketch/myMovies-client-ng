import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GetActorService } from '../fetch-api-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-all-actor-card',
  templateUrl: './all-actor-card.component.html',
  styleUrls: ['./all-actor-card.component.scss']
})
export class AllActorCardComponent implements OnInit {
  actors:any[]=[];
  constructor(
    public fetchApiData:GetActorService,
    public snackBar: MatSnackBar,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.getActors();
  }
  getActors(): void{
    this.fetchApiData.getActors().subscribe((resp:any)=>{
      this.actors= resp;
      console.log(this.actors)
      return this.actors;
    })
  }
}
