import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { LngLat, Map } from 'mapbox-gl';

@Component({
  templateUrl: './zoom-range-page.component.html',
  styleUrls: ['./zoom-range-page.component.css'],
})
export class ZoomRangePageComponent implements AfterViewInit, OnDestroy {

  /* ViewChild es la forma par hacer referencia a un elemento, en este caso es un div que esta 
  con referencia #map */
  @ViewChild('map') divMap?: ElementRef;

  zoom: number = 10;

  map?: Map;
  currentLngLat: LngLat = new LngLat(-74.19337684757431,4.589712718235575)

  ngAfterViewInit(): void {
    if (!this.divMap) throw 'El elemento html no fue encontrado';
    this.map = new Map({
      /*  En este caso cambiamos el elemento map por la referencia creada arriba como divMap*/
      container: this.divMap.nativeElement,
      // container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.currentLngLat, // starting position [lng, lat]
      zoom: this.zoom, // starting zoom
    });
    this.mapListeners();
  }

  ngOnDestroy(): void {
    this.map?.remove()
  }

  mapListeners() {
    if (!this.map) throw 'Mapa no inicializado';

    this.map.on('zoom', (ev) => {
      this.zoom = this.map!.getZoom();
    });

    this.map.on('zoomend', (ev) => {
      if (this.map!.getZoom() < 18) return;
      this.map!.zoomTo(18);
    });

    this.map.on('move', () => {
      this.currentLngLat = this.map!.getCenter()
      console.log(this.currentLngLat);
      
    });

  }

  zoomIn() {
    this.map?.zoomIn();
  }

  zoomOut() {
    this.map?.zoomOut();
  }

  zoomChanged( value:string ) {
      this.zoom = Number(value)
      this.map?.zoomTo(this.zoom)
  }
}
