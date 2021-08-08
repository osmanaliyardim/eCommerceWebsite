import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    private productService:ProductService,
    private activatedRoute:ActivatedRoute) { }

  title = "Ürün Listesi";
  filterText = "";
  products: Product[];

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params =>{
      this.productService.getProducts(params["categoryId"]).subscribe(data=>{
        this.products = data;
      });
    });

  }

  addToCart(product) {
    this.sweetAlertService.success(product.description + " sepete başarıyla eklendi!");
  }

}