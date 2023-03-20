import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdLayerComponent } from './third-layer.component';

describe('ThirdLayerComponent', () => {
  let component: ThirdLayerComponent;
  let fixture: ComponentFixture<ThirdLayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdLayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThirdLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
