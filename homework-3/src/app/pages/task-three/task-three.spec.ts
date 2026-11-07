import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskThree } from './task-three';

describe('TaskThree', () => {
  let component: TaskThree;
  let fixture: ComponentFixture<TaskThree>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskThree],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskThree);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
