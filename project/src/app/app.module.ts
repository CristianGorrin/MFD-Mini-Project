import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PageHomepageComponent } from './page-homepage/page-homepage.component';
import { PartialHeaderComponent } from './partial-header/partial-header.component';
import { PartialFooterComponent } from './partial-footer/partial-footer.component';
import { Page404Component } from './page-404/page-404.component';
import { PartNewsletterComponent } from './part-newsletter/part-newsletter.component';
import { PartTopBrandsComponent } from './part-top-brands/part-top-brands.component';
import { PartAdvertisingComponent } from './part-advertising/part-advertising.component';
import { PartialProductComponent } from './partial-product/partial-product.component';
import { PartProductSpotlightComponent } from './part-product-spotlight/part-product-spotlight.component';
import { PartOpinionComponent } from './part-opinion/part-opinion.component';
import { PartMonolithicAdvertisingComponent } from './part-monolithic-advertising/part-monolithic-advertising.component';

//Servies import
import { ProductService } from './product.service';

@NgModule({
  declarations: [
    AppComponent,
    PageHomepageComponent,
    PartialHeaderComponent,
    PartialFooterComponent,
    Page404Component,
    PartNewsletterComponent,
    PartTopBrandsComponent,
    PartAdvertisingComponent,
    PartialProductComponent,
    PartProductSpotlightComponent,
    PartMonolithicAdvertisingComponent,
    PartOpinionComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      //{ path: '**', component: PartOpinionComponent },
      { path: 'products', component: Page404Component },
      { path: 'products/:id', component: Page404Component },
      { path: 'homepage', component: PageHomepageComponent },
      { path: '', pathMatch: 'full', redirectTo: 'homepage' },
      { path: '**', component: Page404Component }
    ])
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
