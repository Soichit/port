import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  private selectionIndex: number;
  private clickedLink: boolean;


  constructor() { }

  ngOnInit() {
    this.selectionIndex = 0;
    this.clickedLink = true;
  }

  onClick(index: number) {
    if (this.selectionIndex == index) {
      if (!this.clickedLink) {
        this.selectionIndex = 0;
      }
    } else {
      this.selectionIndex = index;
    }
    this.clickedLink = false;
  }

  onClickLink() {
    this.clickedLink = true;
  }
}
