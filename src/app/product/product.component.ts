import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { SweetAlertService } from '../services/sweet-alert.service';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  // Lokal bir servis olmasını istediğim için providers ekledim
  providers: [ProductService]
})
export class ProductComponent implements OnInit {

  constructor(private sweetAlertService: SweetAlertService,
    private productService:ProductService) { }

  title = "Ürün Listesi";
  filterText = "";
  products: Product[];

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data=>{
      this.products = data;
    })
  }

  addToCart(product) {
    this.sweetAlertService.success(product.description + " sepete başarıyla eklendi!");
  }

}