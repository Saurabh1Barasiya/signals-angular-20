import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpB } from './cmp-b';

describe('CmpB', () => {
  let component: CmpB;
  let fixture: ComponentFixture<CmpB>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CmpB]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CmpB);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
