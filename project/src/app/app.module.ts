import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

// Component import
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
import { PageCollectionComponent } from './page-collection/page-collection.component';

//Servies import
import { ProductService } from './product.service';
import { PartCollectionComponent } from './part-collection/part-collection.component';
import { PartNewsletterSimpleComponent } from './part-newsletter-simple/part-newsletter-simple.component';

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
    PageCollectionComponent,
    PartCollectionComponent,
    PartNewsletterSimpleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      //{ path: '**', component: PartOpinionComponent },
      { path: 'collection', component: PageCollectionComponent },
      { path: 'product/:id', component: Page404Component },
      { path: 'product', pathMatch: 'full', redirectTo: 'collection'},
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
