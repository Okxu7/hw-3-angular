// import { Component } from '@angular/core';

// @Component({
//   imports: [],
//   selector: 'app-task-one',
//   styleUrl: './task-one.css',
//   templateUrl: './task-one.html',
// })
// export class TaskOne {}
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-task-one',
  imports: [],
  templateUrl: './task-one.html', // або './task-one.component.html'
  styleUrl: './task-one.css'      // або './task-one.component.css'
})
export class TaskOne { // Якщо Angular 17-19: TaskOneComponent
  // 1. Створюємо масив із рядками тексту
  items: string[] = [
    'Директиви змінюють вигляд або структуру DOM',
    'Пайпи форматують дані прямо в шаблоні',
    'Сигнали забезпечують точкове оновлення сторінки',
    'Маршрутизація перемикає сторінки без перезавантаження'
  ];

  // 2. Сигнал для збереження тексту останнього натиснутого пункту
  selectedItem = signal<string>('');

  // 3. Обробник кліку, який записує натиснутий рядок у сигнал
  selectItem(item: string): void {
    this.selectedItem.set(item);
  }
}