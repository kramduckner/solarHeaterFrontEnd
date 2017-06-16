//TODO: rename this to viewButtonMenu

import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'button-menu',
  templateUrl: './button-menu.component.html',
  styleUrls: ['./button-menu.component.css']
})

export class ButtonMenuComponent implements OnInit {

    public views:Array<String> = ["Day","Week","Month"];

   constructor() {}

 ngOnInit(){}

}
