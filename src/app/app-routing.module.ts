import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductAddComponent } from '@modules/product/product-add/product-add.component';
import { ProductEditComponent } from '@modules/product/product-edit/product-edit.component';
import { ProductComponent } from '@modules/product/product.component';

const routes: Routes = [
  {path: "product", component: ProductComponent},
  {path: "product/add", component: ProductAddComponent},
  {path: "product/edit/:id", component: ProductEditComponent},
  {path: "**", component: ProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
