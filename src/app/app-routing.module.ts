import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tab1/tab1.module#Tab1PageModule' },
  { path: 'map', loadChildren: './map/map.module#MapPageModule' },
  { path: 'tutorial', loadChildren: './tutorial/tutorial.module#TutorialModule' },
  { path: 'modal', loadChildren: './modal/modal.module#ModalPageModule' },  { path: 'modal2', loadChildren: './modal2/modal2.module#Modal2PageModule' },




];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
