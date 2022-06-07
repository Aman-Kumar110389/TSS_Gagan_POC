import { Component, OnInit } from '@angular/core';
import { Category } from '../Interface/Inventory/Category';
import { Inventoryobj} from '../Interface/Inventory/Inventory';
import { FormGroup,FormControl, Validators,} from '@angular/forms';


@Component({
  selector: 'app-inventory-registration',
  templateUrl: './inventory-registration.component.html',
  styleUrls: ['./inventory-registration.component.css']
})

export class InventoryRegistrationComponent implements OnInit {
 
 inventoryForm = new FormGroup({
  Name : new FormControl ("", [Validators.required]),
  Quantity : new FormControl ("", [Validators.required]),
  dateofPurchase : new FormControl ("", [Validators.required]),
  });

  public Records : any;
  Inventoryobj: Inventoryobj;
  category: any;
  categories : Category[]=[];
  
  constructor(
  ) { 
    this.Inventoryobj = new Inventoryobj();

  }
     
  ngOnInit(): void {
   
    var localStorageCategories = localStorage.getItem('Category');
    if(localStorageCategories!=null){
      let category = JSON.parse(localStorageCategories);
      this.categories = category;
    } 
  }

  getnewInventoryID(){
   
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


}