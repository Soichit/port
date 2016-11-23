import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  private selectionIndex: number;
  isSpecial:any;

  constructor() { }

  ngOnInit() {
    this.selectionIndex = 0;
    this.isSpecial = true;
  }

  onClick(index: number) {
    this.selectionIndex = index;
  }

  onClickLink() {
  }
}
