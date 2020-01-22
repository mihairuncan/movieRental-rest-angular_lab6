import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

import {ClientListComponent} from './clients/client-list/client-list.component';
import {ClientsComponent} from './clients/clients.component';
import {ClientService} from "./clients/shared/client.service";

import {MovieService} from "./movies/shared/movie.service";
import { MoviesComponent } from './movies/movies.component';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    ClientListComponent,
    MoviesComponent,
    MoviesListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [ClientService, MovieService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
