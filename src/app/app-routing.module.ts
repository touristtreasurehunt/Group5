import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tab1/tab1.module#Tab1PageModule' },
  { path: 'map', loadChildren: './map/map.module#MapPageModule' },
  { path: 'tutorial', loadChildren: './tutorial/tutorial.module#TutorialModule' },
  { path: 'modal', loadChildren: './modal/modal.module#ModalPageModule' },  { path: 'modal2', loadChildren: './modal2/modal2.module#Modal2PageModule' },
  { path: 'modal3', loadChildren: './modal3/modal3.module#Modal3PageModule' },
  { path: 'modal4', loadChildren: './modal4/modal4.module#Modal4PageModule' },
  { path: 'modal5', loadChildren: './modal5/modal5.module#Modal5PageModule' },
  { path: 'modal6', loadChildren: './modal6/modal6.module#Modal6PageModule' },
  { path: 'modal7', loadChildren: './modal7/modal7.module#Modal7PageModule' },
  { path: 'modal8', loadChildren: './modal8/modal8.module#Modal8PageModule' },
  { path: 'modal9', loadChildren: './modal9/modal9.module#Modal9PageModule' },
  { path: 'modal10', loadChildren: './modal10/modal10.module#Modal10PageModule' },
  { path: 'modal11', loadChildren: './modal11/modal11.module#Modal11PageModule' },




];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
