import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  private selectionIndex: number;
  private isSpecial:any;
  private data: Object;
  private projects: any;

  constructor(private http: Http) { 
    http.get("../assets/projects.json")
        .map(res => res.json())
        .subscribe(data => this.data = data,
                    err => console.log(err),
                    () => console.log('Completed'));
  }

  ngOnInit() {
    this.selectionIndex = 0;
    this.isSpecial = true;
    //this.projects = JSON.parse(JSON.stringify(this.data));
     console.log(this.data);
     console.log(this.projects);
  }

  onClick(index: number) {
    this.selectionIndex = index;
    // console.log(this.data);
    // console.log(this.data[0].title);
    // console.log(this.projects);
    this.data = JSON.parse(JSON.stringify(this.data));
  }

  onClickLink() {
  }
}
