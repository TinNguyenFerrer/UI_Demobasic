import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { ProductComponent } from './modules/product/product.component';
import { ProductEditComponent } from './modules/product/product-edit/product-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductAddComponent } from './modules/product/product-add/product-add.component';
import { ProperPipe } from 'src/app/shared/pipe/proper.pipe';
import { TwoWayBindingComponent } from './modules/two-way-binding/two-way-binding.component';
import { ParentComponent } from './modules/parent/parent.component';
import { ChillComponent } from './modules/chill/chill.component';
import { TwoWayBinding2Component } from './modules/two-way-binding2/two-way-binding2.component';
import { InputBindingComponent } from './modules/two-way-binding2/input-binding/input-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductComponent,
    ProductEditComponent,
    ProductAddComponent,
    ProperPipe,
    TwoWayBindingComponent,
    ParentComponent,
    ChillComponent,
    TwoWayBinding2Component,
    InputBindingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
