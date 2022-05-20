import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { InventoryRegistrationComponent } from './inventory-registration/inventory-registration.component';


const routes: Routes = [
  {
    path:'inventory-registration',
    component:InventoryRegistrationComponent
  },
  {
    path:'inventory-list',
    component:InventoryListComponent
  },
  {
  path:'Category',
   component:CategoryComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
