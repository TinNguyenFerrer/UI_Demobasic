import { TwoWayBindingComponent } from './two-way-binding.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


const routers: Routes = [
  {path: 'two-way-binding', component: TwoWayBindingComponent},
]

@NgModule({
  // declarations: [],
  imports: [
    RouterModule.forChild(routers),
  ],
  exports: [RouterModule,]
})
export class BindingRoutingModule { }
