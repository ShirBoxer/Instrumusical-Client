import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsComponent } from './statistics/statistics.component';
import { BarComponent } from './bar/bar.component';
import { PieComponent } from './pie/pie.component';
import { HighlightDirective } from './highlight.directive';
import { MsShortPipe } from '../pipes/ms-short.pipe';





@NgModule({
  declarations: [
    StatisticsComponent,
    BarComponent,
    PieComponent,
    HighlightDirective,
    MsShortPipe
  ],
  imports: [
    CommonModule
  ]
})
export class StatsModule { }
