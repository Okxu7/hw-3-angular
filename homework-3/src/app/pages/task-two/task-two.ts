// import { Component } from '@angular/core';

// @Component({
//   imports: [],
//   selector: 'app-task-two',
//   styleUrl: './task-two.css',
//   templateUrl: './task-two.html',
// })
// export class TaskTwo {}

import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-task-two',
  imports: [],
  templateUrl: './task-two.html', // або './task-two.component.html'
  styleUrl: './task-two.css'      // або './task-two.component.css'
})
export class TaskTwo { // Якщо Angular 17-19: TaskTwoComponent
  // Сигнал, який зберігає поточний колір тла параграфа (за замовчуванням прозорий або сірий)
  bgColor = signal<string>('#f1f5f9');

  // Метод, який встановлює новий колір при виборі радіо-кнопки
  changeColor(color: string): void {
    this.bgColor.set(color);
  }
}
