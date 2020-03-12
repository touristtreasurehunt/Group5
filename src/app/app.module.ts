import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Camera } from '@ionic-native/camera/ngx';
import { IonicStorageModule } from '@ionic/storage';

import { ModalPage } from '../app/modal/modal.page';
import { Modal2Page } from './modal2/modal2.page';
import { Modal3Page } from './modal3/modal3.page';
import { Modal4Page } from './modal4/modal4.page';
import { Modal5Page } from './modal5/modal5.page';
import { Modal6Page } from './modal6/modal6.page';
import { Modal7Page } from './modal7/modal7.page';
import { Modal8Page } from './modal8/modal8.page';
import { Modal9Page } from './modal9/modal9.page';
import { Modal10Page } from './modal10/modal10.page';
import { Modal11Page } from './modal11/modal11.page';

@NgModule({
  declarations: [AppComponent, ModalPage, Modal2Page, Modal3Page, Modal4Page, Modal5Page, Modal6Page, Modal7Page, Modal8Page, Modal9Page, Modal10Page, Modal11Page],
  entryComponents: [ModalPage, Modal2Page, Modal3Page, Modal4Page, Modal5Page, Modal6Page, Modal7Page, Modal8Page, Modal9Page, Modal10Page, Modal11Page], 
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    IonicStorageModule.forRoot()
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],

})
export class AppModule {}
