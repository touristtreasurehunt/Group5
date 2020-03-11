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
  public q2 : boolean = true;
  private buttonColor: string ="primary";
  private buttonColor2: string ="primary";
  private buttonColor3: string ="primary";
  private buttonTextColor: string ="black"; 
  private buttonTextColor2: string ="black";
  private buttonTextColor3: string ="black";
  public correctAnswers: number = 0;

  ionViewDidEnter() { this.leafletMap(); }

  leafletMap() {
    // In setView add latLng and zoom
    this.map = new Map('mapId', {
      zoomControl: false
    });
    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '',
    }).addTo(this.map);

    L.control.zoom({
      position:'topright'
    }).addTo(this.map);

    var santaAna = L.marker([28.100555, -15.415743]).addTo(this.map);
    santaAna.bindPopup("<img src='../../assets/icon/antaAna.jpg'/>").openPopup();

    this.map.setView([28.100555, -15.415743], 100);


    // marker([28.6, 77]).addTo(this.map)
    //   .bindPopup('Ionic 4 <br> Leaflet.')
    //   .openPopup();
  }

  locatePosition() {
    this.map.locate({ watch: true }).on("locationfound", (e: any) => {
      let newMarker = marker([e.latitude, e.longitude], {
        draggable:false
      }).addTo(this.map);
      newMarker.bindPopup("You are located here!").openPopup();
    });
  }

  /** Remove map when we have multiple map object */
  ionViewWillLeave() {
    this.map.remove();
  }
  
  constructor(private router: Router, public modalController: ModalController, public toastController: ToastController, private menu: MenuController) { }

  async presentModal() {
    this.getColorRight();
    var teatro = L.marker([28.103603, -15.413805]).addTo(this.map);
    this.map.setView([28.103603, -15.413805], 100);
    this.q2 = false;
    const modal = await this.modalController.create({
      component: ModalPage
    });
    return await modal.present();
  }

  goToMap() {
    this.router.navigateByUrl('/map2')
  }

  goToHome() {
    this.router.navigateByUrl('/tab1')
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

getColorWrong(){
  this.buttonColor="red";
  this.buttonTextColor="white";
  
}

getColorWrong2(){
  this.buttonColor2="red";
  this.buttonTextColor2="white";
}

getColorRight(){
  this.getFirstRight();
  this.buttonColor3="green";
  this.buttonTextColor3="white";
  
}

getFirstRight(){
  if(this.buttonColor3 !== "green"){
    this.correctAnswers++;
  }
}

  async presentToast() {
    this.getColorWrong();
    const toast = await this.toastController.create({
      message: 'Error',
      duration: 2000,
  
  position: 'top',
  cssClass: 'toastAfterHeader'
    });
    toast.present();
  }

  async presentToast2() {
    this.getColorWrong2();
    const toast = await this.toastController.create({
      message: 'Error',
      duration: 2000,
  
  position: 'top',
  cssClass: 'toastAfterHeader'
    });
    toast.present();
  }

}
