import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.css'
})
export class AllProductsComponent {

  protects:any[] = []

  constructor(private service:ProductsService) {}
  
  ngOnInit(): void {

    this.getproducts();
  }

  getproducts(){
    this.service.getAllproducts().subscribe((res:any) => {
    this.protects = res;
    console.log(this.protects)
  })
  }
}
