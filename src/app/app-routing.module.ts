import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'map', loadChildren: './map/map.module#MapPageModule' },  { path: 'main', loadChildren: './main/main.module#MainPageModule' },
  { path: 'map2', loadChildren: './map2/map2.module#Map2PageModule' },


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
