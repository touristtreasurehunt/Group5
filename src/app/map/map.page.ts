import { Component, OnInit, ViewChild } from '@angular/core'
import { Router } from '@angular/router';
import { Map, latLng, tileLayer, Layer, marker } from 'leaflet';
import * as L from 'leaflet';
import { ToastController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';

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
import { IonReorderGroup } from '@ionic/angular';

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

  public buttonCheck : boolean = true;
  public buttonCheck2 : boolean = true;

  public buttonColor: string ="primary";
  public buttonColor2: string ="primary";
  public buttonColor3: string ="primary";

  public buttonColorQ5: string ="primary";
  public buttonColor2Q5: string ="primary";
  public buttonColor3Q5: string ="primary";

  public buttonColorQ10: string ="primary";
  public buttonColor2Q10: string ="primary";
  public buttonColor3Q10: string ="primary";

  public correctAnswers: number = 0;

  public lableText: string = "";
  public inputValue: string = "";
  public inputValue2: string = "";
  public inputValue3: string = "";
  public inputValue4: string = "";

  public gabinete: string = "X";
  

  data = [
      { name: 'San Telmo park', selected: "false" },
      { name: 'Santa Catalina park', selected: "false" },
      { name: 'Santa Cethlean park', selected: "false" }
    ];
  data2 = [
      { name: 'No one', selected: "false" },
      { name: 'His wife', selected: "false" },
      { name: 'His mother', selected: "false" }
    ];
  
  public A1 = "";
  public A2 = "";
  public A3 = "";
  public A4 = "";
  public A5 = "";
  public A6 = "";

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
    this.map.setView([28.103632, -15.413838], 100); 

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
    var gobiernoMilitar = L.marker([28.108787, -15.417609]).addTo(this.map);
    gobiernoMilitar.bindPopup("<img src='../../assets/icon/militar.jpg'/> Gran Canaria military command").openPopup();
    this.map.setView([28.108787, -15.417609], 100);
    this.q6 = false;
    const modal = await this.modalController.create({
      component: Modal5Page
    });
    
    return await modal.present();
  }
  async presentModalCabildo() {
    
    var cabildoGC = L.marker([28.107999, -15.419810]).addTo(this.map);
    cabildoGC.bindPopup("<img src='../../assets/icon/cabildo.jpg'/> Gran Canaria Island Council ").openPopup();
    this.map.setView([28.107999, -15.419810], 100);
    this.q7 = false;
    const modal = await this.modalController.create({
      component: Modal6Page
    });
    let ioninput = document.querySelector('body > app-root > ion-app > ion-router-outlet > app-map > ion-content > ion-card:nth-child(8) > ion-grid > ion-row > ion-col > ion-input')
    ioninput.setAttribute("disabled", "true");
    return await modal.present();
  }

  async presentModalMata() {
    
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
    
    var santaAna = L.marker([28.100555, -15.415743]).addTo(this.map);
    santaAna.bindPopup("<img src='../../assets/icon/antaAna.jpg'/> Santa Ana Cathedral").openPopup();
    this.map.setView([28.100555, -15.415743], 100);
    this.q10 = false;
    const modal = await this.modalController.create({
      component: Modal9Page
    });
    let ioninput = document.querySelector('body > app-root > ion-app > ion-router-outlet > app-map > ion-content > ion-card:nth-child(11) > ion-grid > ion-row > ion-col > ion-input')
    ioninput.setAttribute("disabled", "true");
    return await modal.present();
  }

  async presentModalColon() { 
    var colon = L.marker([28.101802, -15.414156]).addTo(this.map);
    colon.bindPopup("<img src='../../assets/icon/colon.jpg'/> Columbus house").openPopup();
    this.map.setView([28.101802, -15.414156], 100);
    this.q11 = false;
    const modal = await this.modalController.create({
      component: Modal10Page
    });

    return await modal.present();
  }

  async presentModalErmita() {
    
    var ermitaAbad = L.marker([28.101991, -15.413852]).addTo(this.map);
    ermitaAbad.bindPopup("<img src='../../assets/icon/abad.jpg'/> Antonio Abad Hermit").openPopup();
    this.map.setView([28.101991, -15.413852], 100);
    const modal = await this.modalController.create({
      component: Modal11Page
    });
    let ioninput = document.querySelector('body > app-root > ion-app > ion-router-outlet > app-map > ion-content > ion-card:nth-child(13) > ion-grid > ion-row > ion-col > ion-input')
    ioninput.setAttribute("disabled", "true");
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

  getColorWrongQ5(){
    this.buttonColorQ5='danger';
    
  }
  
  getColorWrong2Q5(){
    this.buttonColor3Q5="danger";
  }

  getColorWrongQ10(){
    this.buttonColor2Q10='danger';
    
  }
  
  getColorWrong2Q10(){
    this.buttonColor3Q10="danger";
  }
  
  getColorRight(){
    if(this.buttonColor3 !== "success"){
      this.correctAnswers++;
    }
    this.buttonColor3="success";
  }


  getColorRightQ5(){
    if(this.buttonColor2Q5 !== "success"){
      this.correctAnswers++;
    }
    this.buttonColor2Q5 = "success";
  }

  getColorRightQ10(){
    if(this.buttonColorQ10 !== "success"){
      this.correctAnswers++;
    }
    this.buttonColorQ10 = "success";
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

  async presentToast2() {
    
    const toast = await this.toastController.create({
      message: 'Error',
      duration: 2000,
  
  position: 'top',
  cssClass: 'toastAfterHeader'
    });
    toast.present();
  }

  doReorder(ev: any) {
    console.log('Dragged from index', ev.detail.from, 'to', ev.detail.to);
    ev.detail.complete();
  }

  getSecondAnswer(){
    let iongroup = document.getElementById("ion-group"); 
    let answers = document.getElementsByTagName("ion-label");
    let items = document.getElementsByName("item");
    let button = document.getElementsByName("checkButton");
    let nextQuestion = document.getElementsByName('hidden');
    let counter = 0;
    if(answers[0].innerText === "Gómez Bosch"){
      items[0].parentElement.setAttribute('color', 'success'); 
      counter++;
    }else{
      items[0].parentElement.setAttribute('color', 'danger'); 
    }
    if(answers[1].innerText === "Massieu y Matos"){
      items[1].parentElement.setAttribute('color', 'success'); 
      counter++;
    }else{
      items[1].parentElement.setAttribute('color', 'danger'); 
    }
    if(answers[2].innerText === "Mariano Laforet"){
      items[2].parentElement.setAttribute('color', 'success'); 
      counter++;
    }else{
      items[2].parentElement.setAttribute('color', 'danger'); 
    }
    if(answers[3].innerText === "Altolaguirre"){
      items[3].parentElement.setAttribute('color', 'success');
      counter++;
    } else{
      items[3].parentElement.setAttribute('color', 'danger'); 
    }

    if(counter == 4){
      this.correctAnswers++;
      this.gabinete = "Literary Cabinet";
      iongroup.setAttribute("disabled", "true");
      button[0].setAttribute("disabled", "true");
      nextQuestion[0].classList.remove('hidden');
    }

  }


  getSevenAnswer(){
    let answers = document.getElementsByName("q7");
    let items = document.getElementsByName("item2");
    let button = document.getElementsByName("checkButton");
    let nextQuestion = document.getElementsByName('hidden');
    let counter = 0;
    if(answers[0].innerText === "Building"){
      items[0].parentElement.setAttribute('color', 'success');
      counter++;
    }else{
      items[0].parentElement.setAttribute('color', 'danger');
    }
    if(answers[1].innerText === "Attack"){
      items[1].parentElement.setAttribute('color', 'success');
      counter++;
    }else{
      items[1].parentElement.setAttribute('color', 'danger'); 
    }
    if(answers[2].innerText === "Repair"){
      items[2].parentElement.setAttribute('color', 'success'); 
      counter++;
    }else{
      items[2].parentElement.setAttribute('color', 'danger'); 
    }
    if(answers[3].innerText === "Declared historical monument"){
      items[3].parentElement.setAttribute('color', 'success'); 
      counter++;
    } else{
      items[3].parentElement.setAttribute('color', 'danger'); 
    }

    if(counter == 4){
      this.correctAnswers++;
      button[1].setAttribute("disabled", "true");
      nextQuestion[1].classList.remove('hidden');
    }

  }

  inputValueToLable(){
    if(this.inputValue == "Modernist"){
      console.log("Correct");
      if(this.correctAnswers == 2){
        this.correctAnswers++;
      }
      let ioninput = document.querySelector('body > app-root > ion-app > ion-router-outlet > app-map > ion-content > ion-card:nth-child(5) > ion-grid > ion-row > ion-col > ion-input')
      ioninput.setAttribute("disabled", "true");
      this.presentModalTriana()
    }else{
      this.presentToast();
    }
  }

  inputValueToLable2(){
    if(this.inputValue2 == "1930"){
      console.log("Correct");
      if(this.correctAnswers == 5){
        this.correctAnswers++;
      }
      
      this.presentModalCabildo()
    }else{
      this.presentToast();
    }
  }

  inputValueToLable3(){
    if(this.inputValue3 == "Pieter Van der Does"){
      console.log("Correct");
      if(this.correctAnswers == 8){
        this.correctAnswers++;
      }
      
      this.presentModalCatedral()
    }else{
      this.presentToast();
    }
  }

  inputValueToLable4(){
    if(this.inputValue4 == "The Real Village of the Three Palms"){
      console.log("Correct");
      if(this.correctAnswers == 10){
        this.correctAnswers++;
      }
      
      this.presentModalErmita()
    }else{
      this.presentToast();
    }
  }

  

  getCheckTAnswer(check){
   if(check.name == "San Telmo park"){
    
     this.A1 = check.selected;
     console.log(this.A1);
     this.presentModalST();
     let checkboxes = document.querySelectorAll('ion-checkbox');
     
     checkboxes[0].checked = true;
     checkboxes[0].disabled = false;
     checkboxes[1].disabled = true;
     checkboxes[2].disabled = true;
     if(this.buttonCheck){
       this.correctAnswers++;
     }
     this.buttonCheck = false;
   }
   if(check.name == "Answer2"){
    this.A2 = check.selected;
    console.log(this.A2);
  }
  if(check.name == "Answer3"){
    this.A3 = check.selected;
    console.log(this.A3);
  }
   
  }

  getCheckAnswer2(){
      this.presentModalST();
  }



  getCheckTAnswer8(check){
    if(check.name == "No one"){
     
      this.A4 = check.selected;
      console.log(this.A4);
      
    }
    if(check.name == "His wife"){
     this.A5 = check.selected;
     console.log(this.A5);
     this.presentModalPalacete();
     let checkboxes = document.querySelectorAll('ion-checkbox');
     
     checkboxes[4].checked = true;
     checkboxes[3].disabled = true;
     checkboxes[4].disabled = false;
     checkboxes[5].disabled = true;
     if(this.buttonCheck2){
        this.correctAnswers++;
      }
      this.buttonCheck2 = false;
   }
   if(check.name == "His mother"){
     this.A6 = check.selected;
     console.log(this.A6);
   }
    
   }
 
   getCheckAnswer82(){
       this.presentModalPalacete();
   }

}
