import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { UserRegistrationFormComponent } from './user-registration-form/user-registration-form.component';
import { UserLoginFormComponent } from './user-login-form/user-login-form.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { RouterModule, Routes } from '@angular/router';
import { SynopsisViewComponent } from './synopsis-view/synopsis-view.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { ProfileUpdateComponent } from './profile-update/profile-update.component';
import { GenreViewComponent } from './genre-view/genre-view.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import{MatToolbarModule} from '@angular/material/toolbar';
import { FavoritesViewComponent } from './favorites-view/favorites-view.component';
import {MatMenuModule} from '@angular/material/menu';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatSidenav, MatSidenavModule} from '@angular/material/sidenav';
import { DirectorViewComponent } from './director-view/director-view.component';
import { AllDirectorCardComponent } from './all-director-card/all-director-card.component';
import { AllGenreViewComponent } from './all-genre-view/all-genre-view.component';
import { AllActorCardComponent } from './all-actor-card/all-actor-card.component';


const appRoutes: Routes = [
  { path: 'welcome', component: WelcomePageComponent },
  { path: 'movies', component: MovieCardComponent },
  { path: 'profile', component: ProfileViewComponent },
  { path: 'favorites', component: FavoritesViewComponent },
  { path: 'directors', component: AllDirectorCardComponent },
  { path: 'genres', component: AllGenreViewComponent },
  {path: 'actors',component: AllActorCardComponent},
  { path: '', redirectTo: 'welcome', pathMatch: 'prefix' },
];

@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationFormComponent,
    UserLoginFormComponent,
    MovieCardComponent,
    WelcomePageComponent,
    SynopsisViewComponent,
    ProfileViewComponent,
    ProfileUpdateComponent,
    GenreViewComponent,
    NavigationBarComponent,
    FavoritesViewComponent,
    DirectorViewComponent,
    AllDirectorCardComponent,
    AllGenreViewComponent,
    AllActorCardComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatMenuModule,
    FlexLayoutModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
