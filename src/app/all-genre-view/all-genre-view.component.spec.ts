import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllGenreViewComponent } from './all-genre-view.component';

describe('AllGenreViewComponent', () => {
  let component: AllGenreViewComponent;
  let fixture: ComponentFixture<AllGenreViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllGenreViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllGenreViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
