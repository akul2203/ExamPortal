import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatQuizComponent } from './updat-quiz.component';

describe('UpdatQuizComponent', () => {
  let component: UpdatQuizComponent;
  let fixture: ComponentFixture<UpdatQuizComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatQuizComponent]
    });
    fixture = TestBed.createComponent(UpdatQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
