import {AfterViewInit, Component, ElementRef, NgModule, OnInit, ViewChild} from '@angular/core';
import {GoogleMapsModule} from '@angular/google-maps';
import {CommonModule} from '@angular/common';
import {AngularYandexMapsModule} from 'angular8-yandex-maps';
import ymaps from 'ymaps';
import {YandexMap} from './yandex-map/map';
import {IPolygon, TPolygonCoordinates} from './yandex-map/geo-objects/polygon';
import {calculateArea} from './yandex-map/utils/calculate-area';

const POLYGON_PATH: any =
  [
    [55.75458940362399, 37.582988128662095],
    [55.76208002622922, 37.5854713821411],
    [55.769182954659485, 37.594477767944326],
    [55.77358118597124, 37.6062307357788],
    [55.77411702700402, 37.62107360839843],
    [55.7721447743955, 37.63743888854979],
    [55.768241136037496, 37.65174423217774],
    [55.76404737660217, 37.65660820007327],
    [55.758859572540715, 37.65818187713625],
    [55.753864283349, 37.657008972167986],
    [55.74640483249884, 37.65591064453126],
    [55.74228805022262, 37.654846496582024],
    [55.73894395522783, 37.65069244384767],
    [55.73167496636052, 37.63860778808595],
    [55.729818062254175, 37.628926391601574],
    [55.735389983046225, 37.59385137970893],
    [55.738451234238035, 37.58589989495018],
    [55.746536831988564, 37.582068283238264],

  ];

export interface IMapInfo {
  label: string;
  value: string | number;
  unit: string;
}

@Component({
  selector: 'task-yandex-map',
  template: `
    <div class="yandex-map" #map></div>
    <div class="map-info">
      <div *ngFor="let info of output" class="map-info__item">
        <div class="map-info__item-label">{{info.label}}:</div>
        <div class="map-info__item-value">{{info.value}}</div>
        <div class="map-info__item-unit">{{info.unit}}</div>
      </div>
    </div>
  `,
  styleUrls: ['task-yandex-map.component.scss']
})

export class TaskYandexMapComponent implements OnInit, AfterViewInit {
  // @ViewChild(MapInfoWindow, {static: false}) infoWindow: MapInfoWindow;
  @ViewChild('map', {static: false}) mapContainer: ElementRef;

  map: YandexMap;
  polygon: IPolygon;

  center = [55.75, 37.62];

  zoom = 13;

  output: IMapInfo[] = [];

  ngOnInit() {

  }

  createPolygon(maps: any) {

    const polygon: IPolygon = new maps.Polygon(
      [POLYGON_PATH],
      {
        hintContent: 'Многоугольник'
      },
      {
        editorDrawingCursor: 'crosshair',
        editorMaxPoints: 50,
        fillColor: '#FF0000',
        fillOpacity: .5,
        strokeColor: '#AA0000',
        strokeWidth: 2
      });

    polygon.events.add(['geometrychange'], (event) => {
      this.setOutput(maps, this.polygon);
    });

    setTimeout(() => this.setOutput(maps, polygon), 0);

    polygon.editor.startEditing();

    return polygon;
  }

  initMap() {
    ymaps
      .load('https://api-maps.yandex.ru/2.1/?lang=ru_RU&apikey=6096e0ad-06d8-4f91-a509-5d1947819cc4')
      .then(maps => {
        this.map = new maps.Map(this.mapContainer.nativeElement, {
          center: this.center,
          zoom: this.zoom
        });

        this.polygon = this.createPolygon(maps);
        this.map.geoObjects.add(this.polygon);
      })
      .catch(error => console.log('Failed to load Yandex Maps', error));
  }

  ngAfterViewInit(): void {

    this.initMap();
  }

  setOutput(maps, polygon: IPolygon) {
    this.output = [
      this.getArea(maps, polygon),
    ];
  }

  getArea(maps, polygon: IPolygon): IMapInfo {
    const area = Math.round(calculateArea(maps, polygon) / 1000) / 1000;
    return {label: 'Area', value: area, unit: 'км2'};
  }
}


@NgModule({
  imports: [
    CommonModule,
    GoogleMapsModule,
    AngularYandexMapsModule
  ],
  exports: [TaskYandexMapComponent],
  declarations: [TaskYandexMapComponent],
  providers: [],
})
export class TaskYandexMapModule {
}
