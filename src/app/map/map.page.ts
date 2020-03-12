import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router';
import { Map, latLng, tileLayer, Layer, marker } from 'leaflet';
import * as L from 'leaflet';
import { ToastController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import "leaflet-routing-machine";

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage{

  map: Map;
  public q2 : boolean = true;
  public q3 : boolean = true;
  public q4 : boolean = true;
  public q5 : boolean = true;
  public q6 : boolean = true;
  public q7 : boolean = true;
  public q8 : boolean = true;
  public q9 : boolean = true;
  public q10 : boolean = true;
  public q11 : boolean = true;
  private buttonColor: string ="primary";
  private buttonColor2: string ="primary";
  private buttonColor3: string ="primary";
  private buttonColor4: string ="primary";
  private buttonColor5: string ="primary";
  private buttonColor6: string ="primary";
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

    L.Routing.control({
      
      waypoints: [
          L.latLng(28.103632, -15.413838),
          L.latLng(28.103496, -15.416548),
          L.latLng(28.106230, -15.416309)
      ],
      routeWhileDragging: true,
      show: false,
      collapsible: false
      
  }).addTo(this.map);

    // Markers for every place to be added, copy and paste into the corresponding presentModal function. Add image with bindPopup like the santaAna marker

    var triana = L.marker([28.106230, -15.416309]).addTo(this.map);
    triana.bindPopup("<img src='../../assets/icon/triana.jpg'/> Triana").openPopup();
    this.map.setView([28.106230, -15.416309], 100);

    var sanTelmo = L.marker([28.108537, -15.417436]).addTo(this.map);
    sanTelmo.bindPopup("<img src='../../assets/icon/st.jpg'/> San Telmo park").openPopup();
    this.map.setView([28.108537, -15.417436], 100);
    
    var gobiernoMilitar = L.marker([28.108787, -15.417609]).addTo(this.map);
    gobiernoMilitar.bindPopup("<img src='../../assets/icon/militar.jpg'/> Don't know how to translate").openPopup();
    this.map.setView([28.108787, -15.417609], 100);

    var cabildoGC = L.marker([28.107999, -15.419810]).addTo(this.map);
    cabildoGC.bindPopup("<img src='../../assets/icon/cabildo.jpg'/> Don't know how to translate").openPopup();
    this.map.setView([28.107999, -15.419810], 100);

    var castilloMata = L.marker([28.107341, -15.421670]).addTo(this.map);
    castilloMata.bindPopup("<img src='../../assets/icon/mata.jpg'/> Mata castle").openPopup();
    this.map.setView([28.107341, -15.421670], 100);

    var palacete = L.marker([28.105796, -15.418519]).addTo(this.map);
    palacete.bindPopup("<img src='../../assets/icon/palacete.jpg'/> Palace Rodríguez Quegles").openPopup();
    this.map.setView([28.105796, -15.418519], 100);

    var santaAna = L.marker([28.100555, -15.415743]).addTo(this.map);
    santaAna.bindPopup("<img src='../../assets/icon/antaAna.jpg'/> Santa Ana Cathedral").openPopup();
    this.map.setView([28.100555, -15.415743], 100);

    var casaColon = L.marker([28.101886, -15.414178]).addTo(this.map);
    casaColon.bindPopup("<img src='../../assets/icon/colon.jpg'/> Coulmbus House").openPopup();
    this.map.setView([28.101886, -15.414178], 100);

    var ermitaAbad = L.marker([28.101991, -15.413852]).addTo(this.map);
    ermitaAbad.bindPopup("<img src='../../assets/icon/abad.jpg'/> Antonio Abad Hermit").openPopup();
    this.map.setView([28.101991, -15.413852], 100);

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
    var teatro = L.marker([28.103632, -15.413838]).addTo(this.map);
    teatro.bindPopup("<img src='../../assets/icon/teatroperezgaldos.jpg'/> Pérez Galdos Theater").openPopup();
    this.map.setView([28.103632, -15.413838], 100); 
    this.q2 = false;
    const modal = await this.modalController.create({
      component: ModalPage
    });
    return await modal.present();
  }

  async presentModalGabinete() {
    this.getColorRight();
    var gabineteL = L.marker([28.103496, -15.416548]).addTo(this.map);
    gabineteL.bindPopup("<img src='../../assets/icon/gabinete.jpg'/> Literary Cabinet").openPopup();
    this.map.setView([28.103496, -15.416548], 100);
    this.q3 = false;
    const modal = await this.modalController.create({
      component: ModalPage
    });
    return await modal.present();
  }

  goToHome() {
    this.router.navigateByUrl('/tab1')
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

  getColorWrong(){
    this.buttonColor='danger';
    
  }
  
  getColorWrong2(){
    this.buttonColor2="danger";
  }
  
  getColorRight(){
    this.correctAnswers++;
    this.buttonColor3="success";
  }

  getColorWrong3(){
    this.buttonColor4='danger';
    
  }
  
  getColorWrong4(){
    this.buttonColor5="danger";
  }
  
  getColorRight2(){
    this.correctAnswers++;
    this.buttonColor6="success";
  }

/*getFirstRight(){
  if(this.buttonColor3 !== "green"){
    this.correctAnswers++;
  }
}*/

  async presentToast() {
    
    const toast = await this.toastController.create({
      message: 'Error',
      duration: 2000,
  
  position: 'top',
  cssClass: 'toastAfterHeader'
    });
    toast.present();
  }

  /*async presentToast2() {
    
    const toast = await this.toastController.create({
      message: 'Error',
      duration: 2000,
  
  position: 'top',
  cssClass: 'toastAfterHeader'
    });
    toast.present();
  }*/

}
