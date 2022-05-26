import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators, FormBuilder } from '@angular/forms';
import { Category } from '../Interface/Inventory/Category';



@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  form !: FormGroup
  Submitted = false;
  Category: Category ;
  storedCategories: Category[]=[];
  
  constructor( )
  {
    this.Category = new Category(); 
     this.form = new FormGroup(
       {
          id : new FormControl  (" ",Validators.required ),

          Category : new FormControl (" ",Validators.required ),

     }
     )
  }

 ngOnInit(){
 var ls = localStorage.getItem('Category');
  if(ls !== null || ls!=undefined){
    this.storedCategories=JSON.parse(ls);    
     }
 }

saveCategories(){
  if(this.storedCategories.length>=5){
     alert('max 5 allowed');
    return; 
  }
  this.Category.id = this.storedCategories.length+1;
  this.storedCategories.push(this.Category);
   localStorage.setItem('Category', JSON.stringify(this.storedCategories));
   this.Category=new Category();
}
}