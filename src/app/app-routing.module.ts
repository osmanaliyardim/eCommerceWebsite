import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';

// Yönlendirmek istediğimiz sayfalar buraya yazılır
// Örn: url'de products gördüğünde ProductComponent getir
const routes: Routes = [
  {path:"products", component:ProductComponent},
  // pathMatch: url'in kesinlikle boş olduğundan emin olmak için
  {path:"", redirectTo:"products", pathMatch:"full"},
  // dinamik parametre :categoryId gibi tanımlanır
  {path:"products/category/:categoryId", component:ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
