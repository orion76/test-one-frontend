import {AfterViewInit, Component, NgModule, OnInit, ViewChild} from '@angular/core';
import {GoogleMapsModule, MapMarker, MapPolygon} from '@angular/google-maps';
import {CommonModule} from '@angular/common';


const POLYGON_PATH: google.maps.LatLngLiteral[] =
  [
    {lat: 55.75458940362399, lng: 37.582988128662095},
    {lat: 55.76208002622922, lng: 37.5854713821411},
    {lat: 55.769182954659485, lng: 37.594477767944326},
    {lat: 55.77358118597124, lng: 37.6062307357788},
    {lat: 55.77411702700402, lng: 37.62107360839843},
    {lat: 55.7721447743955, lng: 37.63743888854979},
    {lat: 55.768241136037496, lng: 37.65174423217774},
    {lat: 55.76404737660217, lng: 37.65660820007327},
    {lat: 55.758859572540715, lng: 37.65818187713625},
    {lat: 55.753864283349, lng: 37.657008972167986},
    {lat: 55.74640483249884, lng: 37.65591064453126},
    {lat: 55.74228805022262, lng: 37.654846496582024},
    {lat: 55.73894395522783, lng: 37.65069244384767},
    {lat: 55.73167496636052, lng: 37.63860778808595},
    {lat: 55.729818062254175, lng: 37.628926391601574},
    {lat: 55.735389983046225, lng: 37.59385137970893},
    {lat: 55.738451234238035, lng: 37.58589989495018},
    {lat: 55.746536831988564, lng: 37.582068283238264},

  ];

const __POLYGON_PATH: google.maps.LatLngLiteral[] =
  [
    {lat: 55.75458940362399, lng: 37.6062307357788},
    {lat: 55.75458940362399, lng: 37.582988128662095},


    {lat: 55.77358118597124, lng: 37.582988128662095},
    {lat: 55.77358118597124, lng: 37.6062307357788},
  ];

export interface IMapInfo {
  label: string;
  value: string | number;
  unit: string;
}

@Component({
  selector: 'task-google-map',
  template: `
    <google-map height="100%"
                width="100%"
                [center]="center"
                [zoom]="zoom"
                [options]="mapOptions"

                class="google-map"
    >
      <map-polygon [options]="polygonOptions"></map-polygon>


    </google-map>
    <div class="map-info">
      <div *ngFor="let info of output" class="map-info__item">
        <div class="map-info__item-label">{{info.label}}:</div>
        <div class="map-info__item-value">{{info.value}}</div>
        <div class="map-info__item-unit">{{info.unit}}</div>
      </div>
    </div>
  `,
  styleUrls: ['task-google-map.component.scss']
})

export class TaskGoogleMapComponent implements OnInit, AfterViewInit {
  // @ViewChild(MapInfoWindow, {static: false}) infoWindow: MapInfoWindow;
  @ViewChild(MapPolygon, {static: false}) polygon: MapPolygon;
  polygonOptions:
    google.maps.PolygonOptions = {
    paths: POLYGON_PATH,
    strokeColor: 'brown',
    fillColor: 'red',
    strokeOpacity: 0.8,
    draggable: true,
    editable: true
  };
  center = {lat: 55.75, lng: 37.62};

  mapOptions: google.maps.MapOptions = {
    panControl: true,
    scaleControl: true,
    fullscreenControl:false,
streetViewControl:true
  };

  zoom = 13;
  display?: google.maps.LatLngLiteral;
  output: IMapInfo[] = [];

  ngOnInit() {
  }

  ngAfterViewInit(): void {


    this.polygon.polygonMouseup.subscribe(() => {
      this.setOutput();
    });
    setTimeout(() => {
      this.setOutput();
    }, 0);
  }

  setOutput() {
    this.output = [
      this.getArea(),
      this.getPerimeter(),
    ];
  }

  getArea(): IMapInfo {
    const area: number = google.maps.geometry.spherical.computeArea(this.polygon.getPath());


    return {label: 'Area', value: Math.round(area / 1000) / 1000, unit: 'км2'};
  }

  getPerimeter() {
    const perimeter: number = google.maps.geometry.spherical.computeLength(this.polygon.getPath());
    return {label: 'Perimeter', value: Math.round(perimeter) / 1000, unit: 'км'};
  }

}


@NgModule({
  imports: [
    CommonModule,
    GoogleMapsModule
  ],
  exports: [TaskGoogleMapComponent],
  declarations: [TaskGoogleMapComponent],
  providers: [],
})
export class TaskGoogleMapModule {
}
