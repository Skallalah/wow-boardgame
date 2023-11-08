import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelTrackerComponent } from './level-tracker.component';

describe('LevelTrackerComponent', () => {
  let component: LevelTrackerComponent;
  let fixture: ComponentFixture<LevelTrackerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LevelTrackerComponent]
    });
    fixture = TestBed.createComponent(LevelTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
