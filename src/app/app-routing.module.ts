import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { OperatorsComponent } from './components/operators/operators.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ScrollProgressBarComponent } from './components/scroll-progress-bar/scroll-progress-bar.component';

const routes: Routes = [
  {path: '', redirectTo: '/scroll-progress-bar', pathMatch: 'full' },
  { path: 'scroll-progress-bar', component: ScrollProgressBarComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'operators', component: OperatorsComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
