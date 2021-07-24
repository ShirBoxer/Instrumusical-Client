import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { StatsDataService } from '../stats-data.service';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {
  private good = 5;
  private bad = 2;
  public data = [
    {"A": "Positive", "B": 1, "C": this.good},
    {"A": "Negative", "B": 1, "C": this.bad}
  ];
  private totalSamples = 0;
  
  private svg!: any;
  private margin = 50;
  private width = 500;
  private height = 500;
  // The radius of the pie chart is half the smallest side
  private radius = Math.min(this.width, this.height) / 2 - this.margin;
  private colors!: any;
  private words = ["good", "bad"];
  constructor(private statsDataService: StatsDataService) {
    //GET ALL IUNSTRUMENTS AND SHOW HOW MUCH FROM EACH WE HOLD IN DB
    this.statsDataService.getBarData(this.words).subscribe((d) =>{
      this.good = d.good;
      this.bad = d.bad;
      this.totalSamples = d.good + d.bad;
      this.data = [
        {"A": "Positive", "B": this.good, "C": this.good},
        {"A": "Negative", "B": this.bad, "C": this.bad},
      ];
      this.createSvg();
      this.createColors();
      this.drawChart();
    });
   }

  ngOnInit(): void {
   

  }

  private createColors(): void {
    this.colors = d3.scaleOrdinal()
    .domain(this.data.map(row => row.B.toString()))
    .range(["#66ff33", "#ff0000"]);
    //"#879cc4", "#677795", "#5a6782"
}

  private createSvg(): void {
    this.svg = d3.select("figure#pie")
    .append("svg")
    .attr("width", this.width)
    .attr("height", this.height)
    .append("g")
    .attr(
      "transform",
      "translate(" + this.width / 2 + "," + this.height / 2 + ")"
    );
  }
  
  private drawChart(): void {
    // Compute the position of each group on the pie:
    const pie = d3.pie<any>().value((row: any) => Number(row.C));

    // Build the pie chart
    this.svg
    .selectAll('pieces')
    .data(pie(this.data))
    .enter()
    .append('path')
    .attr('d', d3.arc()
      .innerRadius(80)
      .outerRadius(this.radius)
    )
    .attr('fill', (d: any, i: any) => (this.colors(i)))
    .attr("stroke", "#000000")
    .style("stroke-width", "2px");

    // Add labels
    const labelLocation = d3.arc()
    .innerRadius(100)
    .outerRadius(this.radius);

    this.svg
    .selectAll('pieces')
    .data(pie(this.data))
    .enter()
    .append('text')
    .text( (row: { data: { A: any; }; }) => row.data.A)
    .attr("transform", (d: d3.DefaultArcObject) => "translate(" + labelLocation.centroid(d) + ")")
    .style("text-anchor", "middle")
    .style("font-size", 20);
}
}
