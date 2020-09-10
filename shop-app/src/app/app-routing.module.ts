import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopsComponent } from './shops/shops.component';
import { MagazinesComponent } from './magazines/magazines.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'shops', component: ShopsComponent},
    {path: 'magazines', component: MagazinesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
