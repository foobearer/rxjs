import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountdownComponent } from './components/countdown/countdown.component';
import { FiltersComponent } from './components/filters/filters.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { OperatorsComponent } from './components/operators/operators.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ScrollProgressBarComponent } from './components/scroll-progress-bar/scroll-progress-bar.component';

const routes: Routes = [
  {path: '', redirectTo: '/scroll-progress-bar', pathMatch: 'full' },
  { path: 'scroll-progress-bar', component: ScrollProgressBarComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'operators', component: OperatorsComponent },
  { path: 'filters', component: FiltersComponent },
  { path: 'countdown', component: CountdownComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
