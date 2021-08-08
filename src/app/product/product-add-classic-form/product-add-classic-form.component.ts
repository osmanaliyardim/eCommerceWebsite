import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from 'src/app/category/category';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { SweetAlertService } from 'src/app/services/sweet-alert.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-add-classic-form',
  templateUrl: './product-add-classic-form.component.html',
  styleUrls: ['./product-add-classic-form.component.css'],
  providers: [CategoryService, ProductService]
})
export class ProductAddClassicFormComponent implements OnInit {

  constructor(private categoryService:CategoryService,
    private productService:ProductService,
    private sweetAlertService:SweetAlertService) { }

  model:Product = new Product();
  categories:Category[];

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data=>{
      this.categories = data;
    });
  }

  add(form:NgForm){
    this.productService.addProduct(this.model).subscribe(data=>{
      this.sweetAlertService.success(data.name + " başarıyla eklendi!");
    });
  }

}
