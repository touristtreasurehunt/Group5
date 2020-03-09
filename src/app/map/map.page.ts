import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router';
import { Map, latLng, tileLayer, Layer, marker } from 'leaflet';
import * as L from 'leaflet';
import { ToastController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';


@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage{

  map: Map;

  ionViewDidEnter() { this.leafletMap(); }

  leafletMap() {
    // In setView add latLng and zoom
    this.map = new Map('mapId');
    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '',
    }).addTo(this.map);

    this.map.setView([28.644800, 77.216721], 10);


    // marker([28.6, 77]).addTo(this.map)
    //   .bindPopup('Ionic 4 <br> Leaflet.')
    //   .openPopup();
  }

  /** Remove map when we have multiple map object */
  ionViewWillLeave() {
    this.map.remove();
  }
  
  constructor(private router: Router, public modalController: ModalController, public toastController: ToastController, private menu: MenuController) { }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPage
    });
    return await modal.present();
  }

  goToMap() {
    this.router.navigateByUrl('/map2')
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Error',
      duration: 2000,
  
  position: 'top',
  cssClass: 'toastAfterHeader'
    });
    toast.present();
  }

}
