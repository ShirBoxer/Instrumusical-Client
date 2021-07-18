import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-grid',
  templateUrl: './main-grid.component.html',
  styleUrls: ['./main-grid.component.css']
})
export class MainGridComponent implements OnInit {
  nums: number[] = []
  constructor() { }

  ngOnInit(): void {
    for(let i = 0; i < 100; i++){
      this.nums.push(i);
    }
  }

}
