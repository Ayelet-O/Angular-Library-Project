import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LendingsFormComponent } from './lendings-form.component';

describe('LendingsFormComponent', () => {
  let component: LendingsFormComponent;
  let fixture: ComponentFixture<LendingsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LendingsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LendingsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
