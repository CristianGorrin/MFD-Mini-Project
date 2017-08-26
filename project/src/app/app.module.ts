import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PageHomepageComponent } from './page-homepage/page-homepage.component';
import { PartialHeaderComponent } from './partial-header/partial-header.component';
import { PartialFooterComponent } from './partial-footer/partial-footer.component';
import { Page404Component } from './page-404/page-404.component';

@NgModule({
  declarations: [
    AppComponent,
    PageHomepageComponent,
    PartialHeaderComponent,
    PartialFooterComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'homepage', component: PageHomepageComponent },
      { path: '', pathMatch: 'full', redirectTo: 'homepage' },
      { path: '**', component: Page404Component }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
