import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menu = {};

  constructor(private config: ConfigService) { }

  ngOnInit() {
    this.menu = this.getMenu();
  }

  getMenu() {

    return this.config.getConfig().menu;
  }

}
