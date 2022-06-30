import { calcPossibleSecurityContexts } from '@angular/compiler/src/template_parser/binding_parser';
import { Component, OnInit } from '@angular/core';
import { Category } from '../Interface/Inventory/Category';
import { Inventoryobj, InventoryDetails } from '../Interface/Inventory/Inventory';
import { InventoryService } from '../providers/inventory.service';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.css']
})
export class InventoryListComponent implements OnInit {
  records: Inventoryobj[] = [];
  inventoryList: InventoryDetails[];
  constructor(private inventoryService: InventoryService) {
    this.inventoryList = [];
  }

  async ngOnInit(): Promise<void> {
    let storedInventories = localStorage.getItem('Inventory');

    let categories = await this.inventoryService.getCategories().then(response => {
        return response;
    });

    if (storedInventories !== null) {
      this.records = JSON.parse(storedInventories);
      this.records.forEach((val, i) => {
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