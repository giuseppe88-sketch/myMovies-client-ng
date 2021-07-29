import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorites-view',
  templateUrl: './favorites-view.component.html',
  styleUrls: ['./favorites-view.component.scss']
})
export class FavoritesViewComponent implements OnInit {

  constructor(
    public router:Router
  ) { }

  ngOnInit(): void {
  }

}
