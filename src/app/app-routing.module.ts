import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {PageNotFoundComponent} from './component/content/page-not-found/page-not-found.component';
import {LogPageComponent} from './component/content/log-page/log-page.component';
import {SearchComponent} from './component/content/search/search.component';
import {ArchiveComponent} from './component/content/archive/archive.component';
import {HomeComponent} from './component/content/home/home.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'archive', component: ArchiveComponent},
  {path: 'log-page/:id', component: LogPageComponent},
  {path: 'search', component: SearchComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false, // <-- debugging purposes only
      }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class AppRoutingModule {
}
