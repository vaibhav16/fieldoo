import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { PlayerInfoComponent } from './player-info/player-info.component';
import { Error404Component } from './common/error404/error404.component';


const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch: 'full'},
  {path:'home',component:HomePageComponent},
  {path:'playerinfo/:id',component:PlayerInfoComponent},
  {path:'error404',component:Error404Component}
  // {path:'**',redirectTo:'error404',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
