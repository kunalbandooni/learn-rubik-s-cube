import { Component } from '@angular/core';

@Component({
  selector: 'app-second-layer',
  templateUrl: './second-layer.component.html',
  styleUrls: ['./second-layer.component.css']
})
export class SecondLayerComponent {
  constructor() {}

  ngOnInit() {}
  
  displayStyle :any[] = ["none", "none", "none"];

  openPopup(index: number) {
    this.displayStyle[index] = "block";
  }
  closePopup(index: number) {
    this.displayStyle[index] = "none";
  }
}