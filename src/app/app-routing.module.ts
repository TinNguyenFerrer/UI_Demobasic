import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductAddComponent } from '@modules/product/product-add/product-add.component';
import { ProductEditComponent } from '@modules/product/product-edit/product-edit.component';
import { ProductComponent } from '@modules/product/product.component';

const routes: Routes = [
  // {path: 'two_way_binding', component: },
  { path: "product", component: ProductComponent, },
  { path: "product/add", component: ProductAddComponent },
  { path: "product/edit/:id", component: ProductEditComponent },
  {
    path: "test", loadChildren: () => import('./modules/two-way-binding/two-way-binding.module')
      .then(m => m.TwoWayBindingModule)
  },
  { path: "**", component: ProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
