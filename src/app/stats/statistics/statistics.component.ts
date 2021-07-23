import { Component, ElementRef, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  private width = 700;
  private height = 700;
  private margin = 50;
  public svg: any;
  public svgInner: any;
  public yScale: any;
  public xScale: any;
  public xAxis: any;
  public yAxis: any;
  public lineGroup: any;

  constructor(public chartElem: ElementRef) { }

  // initializeChart(): void {
  //   this.svg = d3
  //     .select(this.chartElem.nativeElement)
  //     .select('.linechart')
  //     .append('svg')
  //     .attr('height', this.height);
  //   this.svgInner = this.svg
  //     .append('g')
  //     .style('transform', 'translate(' + this.margin + 'px ,' + this.margin + 'px)');

  //   // this.yScale = d3
  //   //   .scaleLinear()
  //   //   .domain([d3.max(this.data, d => d.value) + 1, d3.min(this.data, d => d.value) — 1])
  //   //   .range([0, this.height — 2 * this.margin]);
  //   // this.xScale = d3.scaleTime().domain(d3.extent(this.data, d => new Date(d.date)));
  // }
  ngOnInit(): void {
    
  }

}
