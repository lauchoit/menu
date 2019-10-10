import { MenuService } from './../../services/menu.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {



  menu: any;

  constructor( private menuService: MenuService ) { }

  ngOnInit() {
    this.menu = this.menuService.seleccionMenu('otro');
    console.log(this.menu);
  }


}
