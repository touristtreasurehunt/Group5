import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router';
import { Map, latLng, tileLayer, Layer, marker } from 'leaflet';
import * as L from 'leaflet';

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

    var marker = L.marker([28.100555, -15.415743]).addTo(this.map);

    this.map.setView([28.100555, -15.415743], 100);


    // marker([28.6, 77]).addTo(this.map)
    //   .bindPopup('Ionic 4 <br> Leaflet.')
    //   .openPopup();
  }

  locatePosition() {
    this.map.locate({ }).on("locationfound", (e: any) => {
      let newMarker = marker([e.latitude, e.longitude], {
        draggable:false
      }).addTo(this.map);
      newMarker.bindPopup('You are located here!').openPopup();
    });
  }

  /** Remove map when we have multiple map object */
  ionViewWillLeave() {
    this.map.remove();
  }
  
  constructor(private router: Router) { }

  goToMap() {
    this.router.navigateByUrl('/map2')
  }

}
