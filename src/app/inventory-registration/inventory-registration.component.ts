import { Component, OnInit } from '@angular/core';
import { Category } from '../Interface/Inventory/Category';
import { Inventoryobj} from '../Interface/Inventory/Inventory';
import { FormBuilder,FormControl ,FormGroup ,Validators,} from '@angular/forms';


@Component({
  selector: 'app-inventory-registration',
  templateUrl: './inventory-registration.component.html',
  styleUrls: ['./inventory-registration.component.css']
})

export class InventoryRegistrationComponent implements OnInit {
 
 inventoryForm = new FormGroup({
  name : new FormControl ("", [Validators.required]),
  quantity : new FormControl ("", [Validators.required]),
  dateofPurchase : new FormControl ("", [Validators.required]),
  categoryId : new FormControl ("", [Validators.required]),
  });

  public Records : any;
  Inventory: Inventoryobj;
  category: any;
  categories : Category[]=[];
  
  constructor() { 
    this.Inventory = new Inventoryobj();
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
get inventoryFormControl() {
  return this.inventoryForm.controls;
}
  saveInventories(){  
    debugger;
    const latestId = this.getnewInventoryID();
   this.Inventory.id = latestId;
   const oldRecords = localStorage.getItem('Inventory');
   if(oldRecords !== null){
    const Inventory = JSON.parse(oldRecords);
    Inventory.push({
      id: this.inventoryForm.controls.id,
      name : this.inventoryForm.controls.name.value,
      categoryId: this.inventoryForm.controls.categoryId.value,
      quantity: this.inventoryForm.controls.quantity.value,
      dateofPurchase: this.inventoryForm.controls.dateofPurchase.value,  
    });
    console.log(Inventory);
    
    localStorage.setItem('Inventory', JSON.stringify(Inventory));
  }
  else{
    const inventoryArr = [];
    inventoryArr.push({id: this.Inventory.id,
    name : this.inventoryForm.controls.name.value,
    categoryId: this.inventoryForm.controls.categoryId.value,
    quantity: this.inventoryForm.controls.quantity.value,
    dateofPurchase: this.inventoryForm.controls.dateofPurchase.value, 
  });
    localStorage.setItem('Inventory', JSON.stringify(inventoryArr));
  }
  } 
}