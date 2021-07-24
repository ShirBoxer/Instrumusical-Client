import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsComponent } from './statistics/statistics.component';
import { BarComponent } from './bar/bar.component';
import { PieComponent } from './pie/pie.component';
import { HighlightDirective } from './highlight.directive';




@NgModule({
  declarations: [
    StatisticsComponent,
    BarComponent,
    PieComponent,
    HighlightDirective
  ],
  imports: [
    CommonModule
  ]
})
export class StatsModule { }
