import {RouterModule, Routes} from '@angular/router';
import {TestOneComponent} from './component/test-one/test-one.component';
import {TestTwoComponent} from './component/test-two/test-two.component';
import {NgModule} from '@angular/core';

const appRoutes: Routes = [
  { path: 'one', component: TestOneComponent },
  { path: 'two', component: TestTwoComponent },
  { path: 'one-alt',
    redirectTo: '/one-alt',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true, // <-- debugging purposes only
        preloadingStrategy: SelectivePreloadingStrategy,

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
