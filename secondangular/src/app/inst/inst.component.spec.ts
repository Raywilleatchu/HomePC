import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstComponent } from './inst.component';

describe('InstComponent', () => {
  let component: InstComponent;
  let fixture: ComponentFixture<InstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
