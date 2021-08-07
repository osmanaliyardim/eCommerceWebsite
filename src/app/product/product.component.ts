import { Component, OnInit } from '@angular/core';
import { SweetAlertService } from '../services/sweet-alert.service';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private sweetAlertService:SweetAlertService) { }

  title = "Ürün Listesi";
  filterText = "";

  products : Product [] = [
    { id:1, name:"Laptop", price:15000, categoryId:1, description: "Apple iMac PRO", imageUrl:"https://images.unsplash.com/photo-1542393545-10f5cde2c810?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80"},
    { id:2, name:"Telefon", price:10000, categoryId:2, description: "Iphone XS Max", imageUrl:"https://images.unsplash.com/photo-1624006930503-6d20b0717097?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"},
    { id:3, name:"Süpürge", price:1235, categoryId:3, description: "Fakir 3150", imageUrl:"https://images.unsplash.com/photo-1558317374-067fb5f30001?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"},
    { id:4, name:"Modem", price:325, categoryId:2, description: "Zyxel A532", imageUrl:"https://images.unsplash.com/photo-1606904825846-647eb07f5be2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"},
    { id:5, name:"Buzdolabı", price:3380, categoryId:3, description: "Bosch ZS23", imageUrl:"https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80"},
    { id:6, name:"Mouse", price:167, categoryId:2, description: "A4 Tech S3", imageUrl:"https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80"}
  ];

  ngOnInit(): void {
  }

  addToCart(product){
    this.sweetAlertService.success(product.description + " sepete başarıyla eklendi!");
  }

}
