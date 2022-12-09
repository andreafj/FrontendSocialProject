import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPlantComponent } from './show-plant.component';

describe('ShowPlantComponent', () => {
  let component: ShowPlantComponent;
  let fixture: ComponentFixture<ShowPlantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowPlantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowPlantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
