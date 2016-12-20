import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

 import { SearchComponent }   from './components/search/search.component';
import { AboutComponent }   from './components/about/about.component';
 import { HistoryComponent }  from './components/history/history.component';
import { ArtistComponent }  from './components/artist/artist.component'


const routes: Routes = [

  { path: '',  component: SearchComponent },
  { path: 'about', component: AboutComponent },
  { path: 'history',     component: HistoryComponent },
  { path: 'artist/:id',     component: ArtistComponent }

  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' }

];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
