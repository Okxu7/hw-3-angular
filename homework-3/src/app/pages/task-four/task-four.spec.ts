import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskFour } from './task-four';

describe('TaskFour', () => {
  let component: TaskFour;
  let fixture: ComponentFixture<TaskFour>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskFour],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskFour);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
