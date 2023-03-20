import { Component } from '@angular/core';

@Component({
  selector: 'app-first-layer',
  templateUrl: './first-layer.component.html',
  styleUrls: ['./first-layer.component.css']
})
export class FirstLayerComponent { 
  constructor() {}

  ngOnInit() {}
  
  displayStyle :any[] = ["none", "none", "none", "none", "none", "none"];

  openPopup(index: number) {
    this.displayStyle[index] = "block";
  }
  closePopup(index: number) {
    this.displayStyle[index] = "none";
  }
}