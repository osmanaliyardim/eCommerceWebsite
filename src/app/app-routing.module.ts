import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login/login.guard';
import { ProductAddClassicFormComponent } from './product/product-add-classic-form/product-add-classic-form.component';
import { ProductAddReactiveFormComponent } from './product/product-add-reactive-form/product-add-reactive-form.component';
import { ProductComponent } from './product/product.component';

// Yönlendirmek istediğimiz sayfalar buraya yazılır
// Örn: url'de products gördüğünde ProductComponent getir
const routes: Routes = [
  {path:"products", component:ProductComponent},
  // pathMatch: url'in kesinlikle boş olduğundan emin olmak için
  {path:"", redirectTo:"products", pathMatch:"full"},
  // dinamik parametre :categoryId gibi tanımlanır
  {path:"products/category/:categoryId", component:ProductComponent},
  {path:"product-add-classicForm", component:ProductAddClassicFormComponent, canActivate:[LoginGuard]},
  {path:"product-add-reactiveForm", component:ProductAddReactiveFormComponent, canActivate:[LoginGuard]},
  {path:"login", component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
