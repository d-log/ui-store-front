import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {LogPageComponent} from './component/content/log-page/log-page.component';
import {HomeComponent} from './component/content/home/home.component';
import {ArchiveComponent} from './component/content/log-tile/archive/archive.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'log-tile/archive', component: ArchiveComponent},
  {path: 'log-page/:id', component: LogPageComponent},
  // {path: '**', component: SomeComponent},
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
