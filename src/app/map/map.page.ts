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

    // Markers for every place to be added, copy and paste into the corresponding presentModal function. Add image with bindPopup like the santaAna marker
    // var gabineteL = L.marker([28.103496, -15.416548]).addTo(this.map);
    // this.map.setView([28.103496, -15.416548], 100);

    // var triana = L.marker([28.106230, -15.416309]).addTo(this.map);
    // this.map.setView([28.106230, -15.416309], 100);

    // var sanTelmo = L.marker([28.108537, -15.417436]).addTo(this.map);
    // this.map.setView([28.108537, -15.417436], 100);
    
    // var gobiernoMilitar = L.marker([28.108787, -15.417609]).addTo(this.map);
    // this.map.setView([28.108787, -15.417609], 100);

    // var cabildoGC = L.marker([28.107999, -15.419810]).addTo(this.map);
    // this.map.setView([28.107999, -15.419810], 100);

    // var castilloMata = L.marker([28.107341, -15.421670]).addTo(this.map);
    // this.map.setView([28.107341, -15.421670], 100);

    // var palacete = L.marker([28.105796, -15.418519]).addTo(this.map);
    // this.map.setView([28.105796, -15.418519], 100);

    var santaAna = L.marker([28.100555, -15.415743]).addTo(this.map);
    santaAna.bindPopup("<img src='../../assets/icon/antaAna.jpg'/>").openPopup();
    this.map.setView([28.100555, -15.415743], 100);

    // var casaColon = L.marker([28.101886, -15.414178]).addTo(this.map);
    // this.map.setView([28.101886, -15.414178], 100);

    // var ermitaAbad = L.marker([28.101991, -15.413852]).addTo(this.map);
    // this.map.setView([28.101991, -15.413852], 100);

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
