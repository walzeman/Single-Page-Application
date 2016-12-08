import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard.component';

import { ProductDetailComponent }  from './product-detail.component';
import { ProductListComponent }      from './product-list.component';
import { ProductService }          from './product.service';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    ProductDetailComponent,
    ProductListComponent
  ],
  providers: [ ProductService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
