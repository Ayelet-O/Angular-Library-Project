import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryMenueComponent } from './library-menue.component';

describe('LibraryMenueComponent', () => {
  let component: LibraryMenueComponent;
  let fixture: ComponentFixture<LibraryMenueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibraryMenueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryMenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
