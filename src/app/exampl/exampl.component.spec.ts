import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamplComponent } from './exampl.component';

describe('ExamplComponent', () => {
  let component: ExamplComponent;
  let fixture: ComponentFixture<ExamplComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamplComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
