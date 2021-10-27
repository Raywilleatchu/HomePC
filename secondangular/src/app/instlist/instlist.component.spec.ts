import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstlistComponent } from './instlist.component';

describe('InstlistComponent', () => {
  let component: InstlistComponent;
  let fixture: ComponentFixture<InstlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
