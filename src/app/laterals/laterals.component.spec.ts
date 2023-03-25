import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LateralsComponent } from './laterals.component';

describe('LateralsComponent', () => {
  let component: LateralsComponent;
  let fixture: ComponentFixture<LateralsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LateralsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LateralsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
