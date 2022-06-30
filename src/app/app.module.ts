import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InventoryRegistrationComponent } from './inventory-registration/inventory-registration.component';
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoryComponent } from './category/category.component';
import {InventoryService} from './providers/inventory.service';

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
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [InventoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
