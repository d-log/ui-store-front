import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {FilePageComponent} from './component/content/file-page/file-page.component';
import {HomeComponent} from './component/content/home/home.component';
import {ArchiveComponent} from './component/content/log-tile/archive/archive.component';
import {PageNotFoundComponent} from './component/content/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'log-tile/archive', component: ArchiveComponent},
  {path: 'log-page/:id', component: FilePageComponent},
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
