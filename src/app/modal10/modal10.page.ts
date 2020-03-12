import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal10',
  templateUrl: './modal10.page.html',
  styleUrls: ['./modal10.page.scss'],
})
export class Modal10Page implements OnInit {

  constructor(private router: Router, private nav: NavController,private modalController: ModalController) { }

  ngOnInit() {
  }
  async closeModal() {
    await this.modalController.dismiss();
  }

}
