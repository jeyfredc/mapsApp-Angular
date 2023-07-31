import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapsRoutingModule } from './maps-routing.module';
import { MiniMapComponent } from './components/mini-map/mini-map.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { MapsLayoutComponent } from './layout/maps-layout/maps-layout.component';
import { FullScreenPageComponent } from './pages/full-screen-page/full-screen-page.component';
import { MarkersPageComponent } from './pages/markers-page/markers-page.component';
import { ZoomRangePageComponent } from './pages/zoom-range-page/zoom-range-page.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';

import * as  mapboxgl from 'mapbox-gl'
(mapboxgl as any).accessToken = 'pk.eyJ1IjoiamV5ZnJlZGMiLCJhIjoiY2xrbDQ2cncxMTJrOTNscGkwb2t6cGNjOCJ9.9q-pEqIBHKk-Kvf983IQkw';

@NgModule({
  declarations: [
    MiniMapComponent,
    SideMenuComponent,
    MapsLayoutComponent,
    FullScreenPageComponent,
    MarkersPageComponent,
    ZoomRangePageComponent,
    PropertiesPageComponent
  ],
  imports: [
    CommonModule,
    MapsRoutingModule
  ]
})
export class MapsModule { }
