import { Component, OnInit, ViewChild } from '@angular/core'
import { Router } from '@angular/router';
import { Map, latLng, tileLayer, Layer, marker } from 'leaflet';
import * as L from 'leaflet';
import { ToastController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
<<<<<<< HEAD
import { Modal2Page } from '../modal2/modal2.page';
import { Modal3Page } from '../modal3/modal3.page';
import { Modal4Page } from '../modal4/modal4.page';
import { Modal5Page } from '../modal5/modal5.page';
import { Modal6Page } from '../modal6/modal6.page';
import { Modal7Page } from '../modal7/modal7.page';
import { Modal8Page } from '../modal8/modal8.page';
import { Modal9Page } from '../modal9/modal9.page';
import { Modal10Page } from '../modal10/modal10.page';
import { Modal11Page } from '../modal11/modal11.page';


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



  doReorder(ev: any) {
    // The `from` and `to` properties contain the index of the item
    // when the drag started and ended, respectively
    console.log('Dragged from index', ev.detail.from, 'to', ev.detail.to);

    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. This method can also be called directly
    // by the reorder group
    ev.detail.complete();
  }




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
      component: Modal2Page
    });
    return await modal.present();
  }

  async presentModalTriana() {
    this.getColorRight();
    var triana = L.marker([28.106230, -15.416309]).addTo(this.map);
    triana.bindPopup("<img src='../../assets/icon/triana.jpg'/> Triana").openPopup();
    this.map.setView([28.106230, -15.416309], 100);
    this.q4 = false;
    const modal = await this.modalController.create({
      component: Modal3Page
    });
    return await modal.present();
  }

  async presentModalST() {
    this.getColorRight();
    var sanTelmo = L.marker([28.108537, -15.417436]).addTo(this.map);
    sanTelmo.bindPopup("<img src='../../assets/icon/st.jpg'/> San Telmo park").openPopup();
    this.map.setView([28.108537, -15.417436], 100);
    this.q5 = false;
    const modal = await this.modalController.create({
      component: Modal4Page
    });
    return await modal.present();
  }

  async presentModalMilitar() {
    this.getColorRight();
    var gobiernoMilitar = L.marker([28.108787, -15.417609]).addTo(this.map);
    gobiernoMilitar.bindPopup("<img src='../../assets/icon/militar.jpg'/> Don't know how to translate").openPopup();
    this.map.setView([28.108787, -15.417609], 100);
    this.q6 = false;
    const modal = await this.modalController.create({
      component: Modal5Page
    });
    return await modal.present();
  }
  async presentModalCabildo() {
    this.getColorRight();
    var cabildoGC = L.marker([28.107999, -15.419810]).addTo(this.map);
    cabildoGC.bindPopup("<img src='../../assets/icon/cabildo.jpg'/> Don't know how to translate").openPopup();
    this.map.setView([28.107999, -15.419810], 100);
    this.q7 = false;
    const modal = await this.modalController.create({
      component: Modal6Page
    });
    return await modal.present();
  }

  async presentModalMata() {
    this.getColorRight();
    var castilloMata = L.marker([28.107341, -15.421670]).addTo(this.map);
    castilloMata.bindPopup("<img src='../../assets/icon/mata.jpg'/> Mata castle").openPopup();
    this.map.setView([28.107341, -15.421670], 100);
    this.q8 = false;
    const modal = await this.modalController.create({
      component: Modal7Page
    });
    return await modal.present();
  }

  async presentModalPalacete() {
    this.getColorRight();
    var palacete = L.marker([28.105796, -15.418519]).addTo(this.map);
    palacete.bindPopup("<img src='../../assets/icon/palacete.jpg'/> Palace Rodríguez Quegles").openPopup();
    this.map.setView([28.105796, -15.418519], 100);
    this.q9 = false;
    const modal = await this.modalController.create({
      component: Modal8Page
    });
    return await modal.present();
  }

  async presentModalCatedral() {
    this.getColorRight();
    var santaAna = L.marker([28.100555, -15.415743]).addTo(this.map);
    santaAna.bindPopup("<img src='../../assets/icon/antaAna.jpg'/> Santa Ana Cathedral").openPopup();
    this.map.setView([28.100555, -15.415743], 100);
    this.q10 = false;
    const modal = await this.modalController.create({
      component: Modal9Page
    });
    return await modal.present();
  }

  async presentModalColon() {
    this.getColorRight();
    var santaAna = L.marker([28.100555, -15.415743]).addTo(this.map);
    santaAna.bindPopup("<img src='../../assets/icon/antaAna.jpg'/> Santa Ana Cathedral").openPopup();
    this.map.setView([28.100555, -15.415743], 100);
    this.q11 = false;
    const modal = await this.modalController.create({
      component: Modal10Page
    });
    return await modal.present();
  }

  async presentModalErmita() {
    this.getColorRight();
    var ermitaAbad = L.marker([28.101991, -15.413852]).addTo(this.map);
    ermitaAbad.bindPopup("<img src='../../assets/icon/abad.jpg'/> Antonio Abad Hermit").openPopup();
    this.map.setView([28.101991, -15.413852], 100);
    const modal = await this.modalController.create({
      component: Modal11Page
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

  
  getSecondAnswer(){
    let answers = document.getElementsByTagName("ion-label");
    let items = document.getElementsByName("item");
    if(answers[0].innerText === "Answer 2 Keep close to Nature's heart"){
      items[0].style.backgroundColor="green"; answers[0].style.color="white";
    }else{
      items[0].style.backgroundColor="red"; answers[0].style.color="white";
    }
    if(answers[1].innerText === "Answer 3 Keep close to Nature's heart"){
      items[1].style.backgroundColor="green"; answers[1].style.color="white";
    }else{
      items[1].style.backgroundColor="red"; answers[1].style.color="white";
    }
    if(answers[2].innerText === "Answer 4 Keep close to Nature's heart"){
      items[2].style.backgroundColor="green"; answers[2].style.color="white";
    }else{
      items[2].style.backgroundColor="red"; answers[2].style.color="white";
    }
    if(answers[3].innerText === "Answer 1 Keep close to Nature's heart"){
      items[3].style.backgroundColor="green"; answers[3].style.color="white";
    } else{
      items[3].style.backgroundColor="red"; answers[3].style.color="white";
    }

    if(items[0].style.backgroundColor =="green" && items[1].style.backgroundColor =="green" && items[2].style.backgroundColor =="green" && items[3].style.backgroundColor =="green"){
      this.correctAnswers++;
    }

  }

}


