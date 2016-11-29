import { Component, OnInit, Input } from '@angular/core';
import {Http, Response} from '@angular/http';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  private selectionIndex: number;
  @Input() data: Object;


  constructor() {}

  ngOnInit() {

  }

  onClick(index: number) {
    this.selectionIndex = index;
  }

  onClickLink() {
  }
}