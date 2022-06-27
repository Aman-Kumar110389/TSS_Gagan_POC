import { Component, OnInit } from '@angular/core';
import { Category } from '../Interface/Inventory/Category';
import { Inventoryobj } from '../Interface/Inventory/Inventory';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.css']
})
export class InventoryListComponent implements OnInit {
  
  Inventory : Inventoryobj[];
  categoryId: string | undefined;
  constructor() { 
    this.Inventory = [];
  }

  ngOnInit(): void {
   const records = localStorage.getItem('Inventory');
   if (records !== null){
      this.Inventory = JSON.parse(records);  
   }
  }
  searchCategory(){
   // var item = this.Inventory.find(item => item.categoryId === this.categoryId);
  //  console.log(item?.name)
  }
}