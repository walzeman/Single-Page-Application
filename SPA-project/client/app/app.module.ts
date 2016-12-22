import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http'
import { AppRoutingModule} from './app-routing.module'

import { AppComponent }  from './app.component';
import { NavbarComponent }  from './components/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { AboutComponent } from './components/about/about.component';
import { HistoryComponent } from './components/history/history.component';
import { ArtistComponent }  from './components/artist/artist.component';
import { AlbumComponent }  from './components/album/album.component';


import { SpotifyService } from './services/spotify.service'
import { RestApiService } from './services/rest_api.service'

@NgModule({
  imports: [ BrowserModule,FormsModule,HttpModule,AppRoutingModule],
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    AboutComponent,
    HistoryComponent,
    ArtistComponent,
    AlbumComponent
  ],

  providers: [ SpotifyService ,RestApiService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
