import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Inventoryobj } from '../Interface/Inventory/Inventory';

@Component({
  selector: 'app-inventory-registration',
  templateUrl: './inventory-registration.component.html',
  styleUrls: ['./inventory-registration.component.css']
})
export class InventoryRegistrationComponent implements OnInit {

  Categories = [
    "Raw Material",
    "Work in Progress",
    "Buffer Inventory",
    "Finished Goods",
  ]
  
  public Records : any;
  data : any;
  Inventoryobj: Inventoryobj;
  constructor(
    private router :Router,
    private route : ActivatedRoute
  ) { 
    this.Inventoryobj = new Inventoryobj();
  }

  ngOnInit(): void {
   this.route.queryParams.subscribe((params)=>{
     console.log(params);
      this.data =JSON.parse(params['data']);
  })
}

  getnewInventoryID(){
    debugger;
    const oldRecords = localStorage.getItem('Inventory');
    if(oldRecords !== null){
    const Inventory = JSON.parse(oldRecords);
    return Inventory.length + 1;
    }
    else{
      return 1;
    }
}
  saveInventories(){
   debugger;
   const latestId = this.getnewInventoryID();
   this.Inventoryobj.id = latestId;
   const oldRecords = localStorage.getItem('Inventory');
   if(oldRecords !== null){
    const Inventory = JSON.parse(oldRecords);
    Inventory.push(this.Inventoryobj);
    localStorage.setItem('Inventory', JSON.stringify(Inventory));
  }
  else{
    const inventoryArr = [];
    inventoryArr.push(this.Inventoryobj);
    localStorage.setItem('Inventory', JSON.stringify(inventoryArr));

  }
  } 

  getnewCategoryID(){
    
    
}

}