import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from "ngx-bootstrap/carousel";
@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.scss'],
  // providers:[{
  //   provide:CarouselConfig,useValue:{interval:1500,noPause:true,showIndicators:true}
  // }]
})
export class FrontpageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
