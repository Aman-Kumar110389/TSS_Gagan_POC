import { calcPossibleSecurityContexts } from '@angular/compiler/src/template_parser/binding_parser';
import { Component, OnInit } from '@angular/core';
import { Category } from '../Interface/Inventory/Category';
import { Inventoryobj, InventoryDetails } from '../Interface/Inventory/Inventory';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.css']
})
export class InventoryListComponent implements OnInit {

  inventoryList: InventoryDetails[];
  constructor() {
    this.inventoryList = [];
  }

  ngOnInit(): void {
    let storedInventories = localStorage.getItem('Inventory');
    let storedCategories = localStorage.getItem('Category');
    if (storedInventories !== null && storedCategories != null) {
      let records: Inventoryobj[] = JSON.parse(storedInventories);
      let categories: Category[] = JSON.parse(storedCategories);
      records.forEach((val, i) => {
        let inventory = new InventoryDetails();
        inventory.id = val.id;
        inventory.dateofPurchase = val.dateofPurchase;
        inventory.name = val.name;
        inventory.quantity = val.quantity;
        inventory.categoryName = categories.find(x => x.id == val.categoryId)?.categoryName;
        this.inventoryList.push(inventory);
      });
    }
  }
}