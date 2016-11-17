import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showStyle: boolean = false;
  project: any;
  about: any;

  constructor(private router: Router) {}

  ngOnInit() {
    this.project = document.getElementById('projectLink');
    this.about = document.getElementById('aboutLink');

    this.project.classList.add('highlighted');
  }

  goProjects() {
    this.router.navigate(['projects']);
    this.project.classList.add('highlighted');
    this.about.classList.remove('highlighted');
  }

  goAbout() {
    this.router.navigate(['about']);
    this.about.classList.add('highlighted');
    this.project.classList.remove('highlighted');
  }

}
