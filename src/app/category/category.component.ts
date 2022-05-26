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
  public Records : any;
  Category: Category ;
  
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
  this.getnewCategoryID();
 }
 
   
 
 getnewCategoryID() : any {
  
  this.Records = localStorage.getItem('Category');
  if(this.Records !== null){
  const Category = JSON.parse(this.Records);
  return Category.length + 1 ;
  }
 
}

saveCategories(){
 
  const latestId = this.getnewCategoryID();
  this.Category.id = latestId;
  const Records = localStorage.getItem('Category');
 if(Records !== null){
  const Category = JSON.parse(Records);
  Category.push(this.Category);
  localStorage.setItem('Category', JSON.stringify(Category));
}
else{
  const CategoryArr = [];
  CategoryArr.push(this.Category);
  localStorage.setItem('Category', JSON.stringify(CategoryArr));

}

}}