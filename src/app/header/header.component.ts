import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from "rxjs/Rx";
import {Http, Response} from '@angular/http';


@Component({
  selector: 'app-header',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  private page: string;
  private data: Object;


  constructor(private router: Router, private activatedRoute: ActivatedRoute, private http: Http) {
    this.subscription = activatedRoute.params.subscribe(
      (param: any) => this.page = param['page']
    );

    http.get("../assets/projects.json")
        .map(res => res.json())
        .subscribe(data => this.data = data,
                    err => console.log(err),
                    () => console.log('Completed'));
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
