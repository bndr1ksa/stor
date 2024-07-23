import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.css'
})
export class AllProductsComponent {

  protects:any[] = []
  category:any[] = []


  constructor(private service:ProductsService) {}
  
  ngOnInit(): void {

    this.getproducts();
    this.getacategory();
  }

  getproducts(){
    this.service.getAllproducts().subscribe((res:any) => {
    this.protects = res;
  } , error => {
    alert(error.message);
  }
)
  }

  getacategory(){
    this.service.getallcategory().subscribe((res:any) => {
      this.category = res;
  }      , error => {
    alert(error.message);
  } 
    )
}



}