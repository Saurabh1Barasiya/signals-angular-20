import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayPractice } from './array-practice';

describe('ArrayPractice', () => {
  let component: ArrayPractice;
  let fixture: ComponentFixture<ArrayPractice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrayPractice]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrayPractice);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
