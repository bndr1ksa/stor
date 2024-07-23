import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }
  getAllproducts(){
    return this.http.get('https://fakestoreapi.com/products')
  }
  getallcategory(){
    return this.http.get('https://fakestoreapi.com/products/categories')

  }

}
