import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConceitosFeedbacksComponent } from './conceitos-feedbacks.component';

describe('ConceitosFeedbacksComponent', () => {
  let component: ConceitosFeedbacksComponent;
  let fixture: ComponentFixture<ConceitosFeedbacksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConceitosFeedbacksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConceitosFeedbacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
