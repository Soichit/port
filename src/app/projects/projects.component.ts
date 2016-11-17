import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  private selectionIndex: number;


  constructor() { }

  ngOnInit() {
    this.selectionIndex = 0;
  }

  onClick(index: number) {
    if (this.selectionIndex == index) {
      this.selectionIndex = 0;
    } else {
      this.selectionIndex = index;
    }
  }
}
