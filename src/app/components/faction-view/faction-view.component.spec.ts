import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactionViewComponent } from './faction-view.component';

describe('FactionViewComponent', () => {
  let component: FactionViewComponent;
  let fixture: ComponentFixture<FactionViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FactionViewComponent]
    });
    fixture = TestBed.createComponent(FactionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
