import { Routes, RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './products/product/product.component';
import { EditProductComponent } from './products/edit-product/edit-product.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { NotfoundComponent } from './notfound/notfound.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'products', component: ProductsComponent },
    // { path: 'products:/page:/order', component: ProductsComponent },

    // { path: 'products', component: ProductsComponent },
    // { path: 'products/:id', component: ProductComponent },
    // { path: 'products/:id/edit', component: EditProductComponent },
    {
        path: 'products', component: ProductsComponent, children: [
            { path: ':id', component: ProductComponent },
            { path: ':id/edit', component: EditProductComponent }]
    },

    {
        path: 'users', component: UsersComponent, children: [
            { path: ':name', component: UserComponent }]
    },
    { path: '**', component: NotfoundComponent }

];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}