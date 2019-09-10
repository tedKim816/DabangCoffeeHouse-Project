import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  restaurantText = {};
  constructor(private config: ConfigService) { }

  ngOnInit() {
    this.restaurantText = this.getRestaurant();

    AOS.init({
      duration: 1200
     });

  }

  getRestaurant() {

    return this.config.getConfig().restaurantText;
  }

}
