import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'map', loadChildren: './map/map.module#MapPageModule' },
  { path: 'main', loadChildren: './main/main.module#MainPageModule' },
  { path: 'map2', loadChildren: './map2/map2.module#Map2PageModule' },
  { path: 'tab1', loadChildren: './tab1/tab1.module#Tab1PageModule' },
  { path: 'tutorial', loadChildren: './tutorial/tutorial.module#TutorialModule' },
  { path: 'modal', loadChildren: './modal/modal.module#ModalPageModule' },


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
