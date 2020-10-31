import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollProgressBarComponent } from './scroll-progress-bar/scroll-progress-bar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomePageComponent } from './home-page/home-page.component';
import { OperatorsComponent } from './operators/operators.component';
import { CountdownComponent } from './countdown/countdown.component';
import { FiltersComponent } from './filters/filters.component';



@NgModule({
  declarations: [ScrollProgressBarComponent, PageNotFoundComponent, HomePageComponent, OperatorsComponent, CountdownComponent, FiltersComponent],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
