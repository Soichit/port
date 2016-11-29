import { Component, OnInit, Input } from '@angular/core';
import {Http, Response} from '@angular/http';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  private selectionIndex: number;
  private isSpecial:any;
  @Input() data: Object;

   constructor() {}

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
