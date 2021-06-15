import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectionDetailesComponent } from './connection-detailes.component';

describe('ConnectionDetailesComponent', () => {
  let component: ConnectionDetailesComponent;
  let fixture: ComponentFixture<ConnectionDetailesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectionDetailesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectionDetailesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
