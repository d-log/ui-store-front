import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {BodyComponent} from './component/body/body.component';

const appRoutes: Routes = [
  { path: '', component: BodyComponent },
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
  providers: [
  ]
})
export class AppRoutingModule { }
