import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-partial-header',
  templateUrl: './partial-header.component.html',
  styleUrls: ['./partial-header.component.sass']
})
export class PartialHeaderComponent implements OnInit {
  opt_template: string = '';
  templates_name = {
    homepage: '/homepage',
    collection_page: '/collection_page'
  }

  constructor(private route:Router) {
    route.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.opt_template = route.url.split('?')[0];
      }
  });
  }

  ngOnInit() {
  }
}
