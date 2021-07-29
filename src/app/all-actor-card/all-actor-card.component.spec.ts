import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllActorCardComponent } from './all-actor-card.component';

describe('AllActorCardComponent', () => {
  let component: AllActorCardComponent;
  let fixture: ComponentFixture<AllActorCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllActorCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllActorCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
