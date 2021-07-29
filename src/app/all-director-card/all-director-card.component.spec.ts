import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDirectorCardComponent } from './all-director-card.component';

describe('AllDirectorCardComponent', () => {
  let component: AllDirectorCardComponent;
  let fixture: ComponentFixture<AllDirectorCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllDirectorCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllDirectorCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
