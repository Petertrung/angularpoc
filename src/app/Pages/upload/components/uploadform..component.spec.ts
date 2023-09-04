import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadformComponent } from './uploadform..component';

describe('UploadformComponent', () => {
  let component: UploadformComponent;
  let fixture: ComponentFixture<UploadformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UploadformComponent]
    });
    fixture = TestBed.createComponent(UploadformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
