import { Component } from '@angular/core';

@Component({
  selector: 'app-third-layer',
  templateUrl: './third-layer.component.html',
  styleUrls: ['./third-layer.component.css']
})
export class ThirdLayerComponent {
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
