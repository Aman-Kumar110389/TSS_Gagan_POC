import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators,} from '@angular/forms';
import { Category } from '../Interface/Inventory/Category';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  
  categoryName = new FormControl ("", [Validators.required]);
  category: Category ;
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
  if(this.storedCategories.length>=5){
     alert('max 5 allowed');
    return; 
  } 
  let category = this.storedCategories.find(x => x.categoryName?.toLowerCase()== this.categoryName.value.trim().toLowerCase());
 if(category == undefined || category == null)  {
  this.storedCategories.push({ 
    id : this.storedCategories.length+1,
    categoryName : this.categoryName.value.trim()});
     localStorage.setItem('Category', JSON.stringify(this.storedCategories));
    // this.categoryName.value.setItem(''); //   
 }
 else
 {
   alert("duplicate entry");
 }
 
function xyz(){
  
}
  
/*  let checkExists: boolean = false;
  for (var i = 0; i < this.storedCategories.length; i++) 
{
  debugger 
  if (this.categoryName.value.trim() == this.storedCategories[i].categoryName?.trim()){
    checkExists = true;
  }
}
  if (checkExists == false) */{
 
   
     }  
   }
 }


}