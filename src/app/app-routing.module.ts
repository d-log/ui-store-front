import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeComponent} from './component/content/home/home.component';
import {ArchiveComponent} from './component/content/log-tile/archive/archive.component';
import {PageNotFoundComponent} from './component/content/page-not-found/page-not-found.component';
import {LogPageIdComponent} from './component/content/log-page/page-id/log-page-id.component';
import {LogCreateComponent} from './component/content/log-editor/log-create.component';
import {LogUpdateComponent} from './component/content/log-editor/log-update.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'file/create', component: LogCreateComponent},
  {path: 'file/update/:id', component: LogUpdateComponent},
  {path: 'log-tile/archive', component: ArchiveComponent},
  {path: 'log-page/:id', component: LogPageIdComponent},
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
