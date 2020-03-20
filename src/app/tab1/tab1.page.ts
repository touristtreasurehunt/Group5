import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {

  constructor(private router: Router) { }

  goToEng() {
    console.log('You switched to english as language!');
  }

  goToEsp() {
    console.log('You switched to spanish as language!');

  }

  goToMap() {
    this.router.navigateByUrl('/tutorial')
  }
}
