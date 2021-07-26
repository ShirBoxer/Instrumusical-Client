import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { Instrument } from 'src/app/models/instrument';
import { InstrumentService } from 'src/app/services/instrument.service';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {
  //replace data in realdata
  private categoriesFreq = {
      'guitars' : 0,
      'drums': 0,
      'keys': 0,
      'dj-gear': 0,
      'accessories': 0
  };
  private totalItems = 0;
  public data : any[] = []; 
  private svg !: any; // store svg image that d3 draws into DOM
  private margin = 50;
  private width = 800 - (this.margin * 2);
  private height = 450 - (this.margin * 2);
  
  constructor(private instrumentService: InstrumentService) {
        //GET ALL IUNSTRUMENTS AND SHOW HOW MUCH FROM EACH WE HOLD IN DB

      this.instrumentService.getAllInstruments().subscribe( instruments => {
        this.process(instruments);
        this.data.push({Framework : 'guitars', Stars: this.categoriesFreq.guitars, Released: this.categoriesFreq.guitars });
        this.data.push({Framework : 'drums', Stars: this.categoriesFreq.drums, Released: this.categoriesFreq.drums });
        this.data.push({Framework : 'keys', Stars: this.categoriesFreq.keys, Released: this.categoriesFreq.keys });
        this.data.push({Framework : 'DJ gear', Stars: this.categoriesFreq['dj-gear'], Released: this.categoriesFreq['dj-gear'] });
        this.data.push({Framework : 'accessories', Stars: this.categoriesFreq.accessories, Released: this.categoriesFreq.accessories});


        this.createSvg();
        this.drawBars(this.data);
      })

   }

  ngOnInit(): void {
    
  }

  private process(instruments: Instrument[]): void {
    this.totalItems = instruments.length;
    instruments.forEach((ins) => {
      
      switch (ins.category){
        case 'guitars':{
          this.categoriesFreq.guitars += 1;
          break;
        }
        case 'drums':{
          this.categoriesFreq.drums += 1;
          break;
        }
        case 'keys':{
          this.categoriesFreq.keys += 1;
          break;
        }
        case 'dj-gears':{
          this.categoriesFreq['dj-gear'] += 1;
          break;
        }
        default:{
          this.categoriesFreq.accessories += 1;
          break;
        }
    }});
  
  }
  private createSvg(): void {
    this.svg = d3.select("figure#bar")
                .append("svg")
                .attr("width", this.width + (this.margin * 2))
                .attr("height", this.height + (this.margin * 2))
                .append("g")
                .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
  }

  private drawBars(data: any[]): void {
    // Create the X-axis band scale
    const x = d3.scaleBand()
    .range([0, this.width])
    .domain(data.map(d => d.Framework))
    .padding(0.2);

    // Draw the X-axis on the DOM
    this.svg.append("g")
    .attr("transform", "translate(0," + this.height + ")")
    .call(d3.axisBottom(x))
    .selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end");

    // Create the Y-axis band scale
    const y = d3.scaleLinear()
    .domain([0, this.totalItems])
    .range([this.height, 0]);

    // Draw the Y-axis on the DOM
    this.svg.append("g")
    .call(d3.axisLeft(y));
    
    // Create and fill the bars
    this.svg.selectAll("bars")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", (d: { Framework: string; }) => x(d.Framework))
            .attr("y", (d: { Stars: d3.NumberValue; }) => y(d.Stars))
            .attr("width", x.bandwidth())
            .attr("height", (d: { Stars: d3.NumberValue; }) => this.height - y(d.Stars) || 0)
            .attr("fill", "#d04a35");
  }
}
