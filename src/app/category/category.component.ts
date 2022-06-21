import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators,} from '@angular/forms';
import { Category } from '../Interface/Inventory/Category';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  
  isEdit : any;
  categoryName = new FormControl ("", [Validators.required]);
  category: Category;
  storedCategories: Category[]=[];
  
  constructor()
  {
    this.category = new Category(); 
  }
 ngOnInit(){ 
 var ls = localStorage.getItem('Category');
  if(ls !== null || ls!=undefined){
    this.storedCategories=JSON.parse(ls);    
     }
 }
saveCategories(){
  if(!this.categoryName.hasError('required') ){  
  if(this.storedCategories.length>=5 && this.isEdit == false){
     alert('max 5 allowed');   
    return; 
  } 
  let category = this.storedCategories.find(x => x.categoryName?.toLowerCase()== this.categoryName.value.trim().toLowerCase());
 if(category == undefined || category == null){
  if(this.isEdit!==undefined){
    this.storedCategories[this.isEdit].categoryName = this.categoryName.value.trim();
    this.isEdit=undefined
   
  }else{
    this.storedCategories.push({ 
      id: this.storedCategories.length + 1,
      categoryName: this.categoryName.value.trim()
     });  
}
     this.categoryName.clearValidators();
     
     localStorage.setItem('Category', JSON.stringify(this.storedCategories));
     this.categoryName.setValue(''); 
 }
 else 
 {
   alert("duplicate entry");
 }
   }
  }
 editCategory(index : number){
let item=this.storedCategories[index]
  this.categoryName.setValue(item.categoryName); 
  this.isEdit = index;
}
deleteCategory(index : number){
     let itemm = this.storedCategories[index]
     this.storedCategories.splice(index, 1);
   //  this.isEdit = index;
     // this.storedCategories.slice(index); 
    }
  }