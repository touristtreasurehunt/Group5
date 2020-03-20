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

import { ModalPageModule } from './modal/modal.module';
import { Modal2PageModule } from './modal2/modal2.module';
import { Modal3PageModule } from './modal3/modal3.module';
import { Modal4PageModule } from './modal4/modal4.module';
import { Modal5PageModule } from './modal5/modal5.module';
import { Modal6PageModule } from './modal6/modal6.module';
import { Modal7PageModule } from './modal7/modal7.module';
import { Modal8PageModule } from './modal8/modal8.module';
import { Modal9PageModule } from './modal9/modal9.module';
import { Modal10PageModule } from './modal10/modal10.module';
import { Modal11PageModule } from './modal11/modal11.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [ ], 
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    IonicStorageModule.forRoot(), ModalPageModule, Modal2PageModule, Modal3PageModule, Modal4PageModule, Modal5PageModule, Modal6PageModule, Modal7PageModule, Modal8PageModule, Modal9PageModule, Modal10PageModule, Modal11PageModule
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
