import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InventoryRegistrationComponent } from './inventory-registration/inventory-registration.component';
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { FormsModule } from '@angular/forms';
import { CategoryComponent } from './category/category.component';



@NgModule({
  declarations: [
    AppComponent,
    InventoryRegistrationComponent,
    InventoryListComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
