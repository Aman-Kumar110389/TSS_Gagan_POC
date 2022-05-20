import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validator, Validators } from '@angular/forms';
import { CategoryId } from '../Interface/Inventory/Category';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {


  form : any

  constructor(
    private router :Router,
    private route : ActivatedRoute
  ){
     this.form = new FormGroup(
       {
          Category : new FormControl (" ",Validators.required ),
     }
     )
  }
 ngOnInit(){
   
 }
 saveCategory(){
   let data: String =this.form.value;
   this.router.navigate(['./inventory-registration'],{
     queryParams :{data:JSON.stringify(data)}
   })
 }
}