import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { ViewChild } from '@angular/core';
import {} from 'googlemaps';


@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  contact = {};

  @ViewChild('map',{static: false}) mapElement: any;
  map: google.maps.Map;

  constructor(private config: ConfigService) { }

  ngOnInit(): void {
    const mapProperties = {
         center: new google.maps.LatLng(35.2271, -80.8431),
         zoom: 15,
         mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement,    mapProperties);
 

    // function myMap() {
    //   var mapCanvas = document.getElementById("map");
    //   var myCenter = new google.maps.LatLng(45.579591,9.164906); 
    //   var mapOptions = {center: myCenter, zoom: 13};
    //   var map = new google.maps.Map(mapCanvas,mapOptions);
    //   var marker = new google.maps.Marker({
    //     position: myCenter,
    //   });
    //   marker.setMap(map);
    // }

    // this.contact = this.getContact();

  }

  getContact() {
    return this.config.getConfig().contact;
  }
}
