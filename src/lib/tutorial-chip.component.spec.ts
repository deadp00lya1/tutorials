import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialChipComponent } from './tutorial-chip.component';

describe('TutorialChipComponent', () => {
  let component: TutorialChipComponent;
  let fixture: ComponentFixture<TutorialChipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TutorialChipComponent]
    });
    fixture = TestBed.createComponent(TutorialChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
