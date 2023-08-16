import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertProfileComponent } from './propert-profile.component';

describe('PropertProfileComponent', () => {
  let component: PropertProfileComponent;
  let fixture: ComponentFixture<PropertProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropertProfileComponent]
    });
    fixture = TestBed.createComponent(PropertProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
