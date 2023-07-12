import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormbookComponent } from './formbook.component';

describe('FormbookComponent', () => {
  let component: FormbookComponent;
  let fixture: ComponentFixture<FormbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormbookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
