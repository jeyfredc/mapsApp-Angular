import { Component,AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Map } from 'mapbox-gl';

@Component({
  templateUrl: './full-screen-page.component.html',
  styleUrls: ['./full-screen-page.component.css']
})
export class FullScreenPageComponent implements AfterViewInit{

  /* ViewChild es la forma par hacer referencia a un elemento, en este caso es un div que esta 
  con referencia #map */
  @ViewChild('map') divMap?: ElementRef;


  ngAfterViewInit(): void {
    if ( !this.divMap) throw 'El elemento html no fue encontrado'  
    const map = new Map({
      /*  En este caso cambiamos el elemento map por la referencia creada arriba como divMap*/
      container: this.divMap.nativeElement,
      // container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
      });
    
  }


}
