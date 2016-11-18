import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  selectedComponent: string;
  header: any;
  project: any;
  about: any;

  //constructor(private router: Router) {}

  ngOnInit() {
    this.header = document.getElementById('header');
    this.project = document.getElementById('projectLink');
    this.about = document.getElementById('aboutLink');

    this.selectedComponent = 'projects';
    this.project.classList.add('highlighted');
  }

  goProjects() {
    //this.router.navigate(['projects']);
    this.selectedComponent = 'projects';
    this.header.classList.remove('creative');
    this.project.classList.add('highlighted');
    this.about.classList.remove('highlighted');
  }

  goAbout() {
    //this.router.navigate(['about']);
    this.selectedComponent = 'about'
    this.header.classList.add('creative');
    this.about.classList.add('highlighted');
    this.project.classList.remove('highlighted');
  }
}
