import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleTaskComponent } from './style-task.component';

describe('StyleTaskComponent', () => {
  let component: StyleTaskComponent;
  let fixture: ComponentFixture<StyleTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StyleTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
