import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';
import { PersonComponent } from './person/person.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { FormsModule } from '@angular/forms';
import { ProductAddComponent } from './product/product-add/product-add.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductComponent,
    PersonComponent,
    ProductEditComponent,
    ProductAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: "product", component: ProductComponent},
      {path: "person", component: PersonComponent},
      {path: "product/add", component: ProductAddComponent},
      {path: "product/edit/:id", component: ProductEditComponent},
      {path: "**", component: ProductComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
