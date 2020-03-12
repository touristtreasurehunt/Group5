import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal8',
  templateUrl: './modal8.page.html',
  styleUrls: ['./modal8.page.scss'],
})
export class Modal8Page implements OnInit {

  constructor(private router: Router, private nav: NavController,private modalController: ModalController) { }

  ngOnInit() {
  }
  async closeModal() {
    await this.modalController.dismiss();
  }
}
