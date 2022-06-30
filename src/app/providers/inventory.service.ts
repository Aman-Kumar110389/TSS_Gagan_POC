import { Injectable } from '@angular/core';
import { Category } from '../Interface/Inventory/Category';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor() { }

  async getCategories(): Promise<Category[]> {
    let result: Category[] = [];
    let storedCategories = localStorage.getItem('Category');
    if (storedCategories != null) {
      result = JSON.parse(storedCategories);
      return result;
    }
    return result;
  }
}
