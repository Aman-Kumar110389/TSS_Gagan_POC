import { Component, OnInit } from '@angular/core';
import { Inventoryobj } from '../Interface/Inventory/Inventory';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.css']
})
export class InventoryListComponent implements OnInit {

  Inventory : Inventoryobj[];
  constructor() { 
    this.Inventory = [];
  }

  ngOnInit(): void {
   const records = localStorage.getItem('Inventory');
   if (records !== null){
      this.Inventory =JSON.parse(records);
   }

  }

}
