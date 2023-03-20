import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondLayerComponent } from './second-layer.component';

describe('SecondLayerComponent', () => {
  let component: SecondLayerComponent;
  let fixture: ComponentFixture<SecondLayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondLayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
