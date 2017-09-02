import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

const interval: number = 20;

@Component({
  selector: 'app-partial-header',
  templateUrl: './partial-header.component.html',
  styleUrls: ['./partial-header.component.sass']
})
export class PartialHeaderComponent implements OnInit {
  refs = {
    func: null,
    target: null
  };

  opt_template: string = '';
  templates_name = {
    homepage: '/homepage',
    collectionpage: '/collection'
  }

  resources = {
    homepage: {
      index: 0,
      cunter: 0,
      progress_bar: false,
      urls: [
        ['http://via.placeholder.com/1350x560/050', true ],
        ['http://via.placeholder.com/1350x560/00f', false],
        ['http://via.placeholder.com/1350x560/0f0', false],
        ['http://via.placeholder.com/1350x560/123', false],
      ]
    }
  }

  constructor(private route:Router) {
    route.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.opt_template = route.url.split('?')[0];
        switch (this.opt_template) {
          case this.templates_name.homepage:
            this.HomepageInit();
            break;
          case this.templates_name.collectionpage:
            this.SetBackgroundImage('http://via.placeholder.com/1350x560');
            break;
          default:
            document.getElementById('main-header').style.backgroundImage = '';
            break;
        }
      }
    });
  }

  SetBackgroundImage(url) {
    document.getElementById('main-header').style.backgroundImage = 'url(' + url + ')';
  }

  ngOnInit() {
  }

  HomepageInit() {
    this.refs.func = setInterval(() => {
      this.refs.target = document.getElementById('container-step');
      if (this.refs.target != null) {
        this.SetBackgroundImage(this.resources.homepage.urls[0][0]);
        this.resources.homepage.progress_bar = true;
    
        clearInterval(this.refs.func);
        this.refs.func = setInterval(() => {
          this.HomepageLoop();
        }, 1000);
      }
    }, 2000);
  }

  HomepageLoop() {
    if (this.resources.homepage.cunter == 0) {
      this.resources.homepage.progress_bar = true;
    } else if (this.resources.homepage.cunter >= interval) {
      this.resources.homepage.cunter = -1;
      this.resources.homepage.progress_bar = false;

      this.resources.homepage.index++;
      if (this.resources.homepage.index >= this.resources.homepage.urls.length) {
        this.resources.homepage.index = 0;
      }

      this.resources.homepage.urls[this.resources.homepage.index][1] = true;
      this.SetBackgroundImage(this.resources.homepage.urls[this.resources.homepage.index][0]);
      this.HomePageSetUrlsStats(this.resources.homepage.index);
    }

    this.resources.homepage.cunter++;
  }

  HomePageSetUrlsStats(index: number) {
    if (index == 0) {
      this.resources.homepage.urls[this.resources.homepage.urls.length - 1][1] = false;
    } else {
      this.resources.homepage.urls[index - 1][1] = false;
    }

    if (index >= this.resources.homepage.urls.length - 1) {
      this.resources.homepage.urls[0][1] = false;
    } else {
      this.resources.homepage.urls[index + 1][1] = false;
    }
  }

  HomepageClickNext() {
    this.resources.homepage.index++;
    if (this.resources.homepage.index >= this.resources.homepage.urls.length) {
      this.resources.homepage.index = 0;
    }

    this.HomepageReset();
  }

  HomepageClickPrevious() {
    this.resources.homepage.index--;
    if (this.resources.homepage.index < 0) {
      this.resources.homepage.index = this.resources.homepage.urls.length - 1;
    }

    this.HomepageReset();
  }

  HomepageReset() {
    this.resources.homepage.cunter = 0;
    this.resources.homepage.progress_bar = false;

    this.resources.homepage.urls[this.resources.homepage.index][1] = true;
    this.SetBackgroundImage(this.resources.homepage.urls[this.resources.homepage.index][0]);
    this.HomePageSetUrlsStats(this.resources.homepage.index);
  }
}
