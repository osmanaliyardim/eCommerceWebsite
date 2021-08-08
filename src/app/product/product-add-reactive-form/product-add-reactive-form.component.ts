import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/category/category';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { SweetAlertService } from 'src/app/services/sweet-alert.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-add-reactive-form',
  templateUrl: './product-add-reactive-form.component.html',
  styleUrls: ['./product-add-reactive-form.component.css'],
  providers: [CategoryService, ProductService]
})
export class ProductAddReactiveFormComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,
    private categoryService:CategoryService,
    private productService:ProductService,
    private sweetAlertService:SweetAlertService) { }

  productAddForm:FormGroup;
  product:Product = new Product();
  categories:Category[];

  createProductAddForm(){
    this.productAddForm = this.formBuilder.group({
      name:["", Validators.required],
      description:["", Validators.required],
      imageUrl:["", Validators.required],
      price:["", Validators.required],
      categoryId:["", Validators.required],
    });
  }

  ngOnInit(): void {

    this.createProductAddForm();

    this.categoryService.getCategories().subscribe(data=>{
      this.categories = data;
    });
  }

  add(){
    if(this.productAddForm.valid){
      this.product = Object.assign({}, this.productAddForm.value)
    }

    this.productService.addProduct(this.product).subscribe(data=>{
      this.sweetAlertService.success(data.name + " başarıyla eklendi!");
    });
  }

}