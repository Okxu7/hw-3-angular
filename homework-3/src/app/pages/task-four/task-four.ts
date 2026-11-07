// import { Component, signal } from '@angular/core';

// @Component({
//   selector: 'app-task-four',
//   standalone: true,
//   templateUrl: './task-four.html',
//   styleUrl: './task-four.css'
// })
// export class TaskFour  {
//   // Сигнал, який визначає, чи існує елемент у DOM (на старті він true)
//   isElementInDom = signal<boolean>(true);

//   // Метод, який видаляє елемент (встановлює signal у false)
//   removeItem(): void {
//     this.isElementInDom.set(false);
//   }

//   // Метод для повернення елемента назад (для зручності перевірки)
//   restoreItem(): void {
//     this.isElementInDom.set(true);
//   }
// }
 import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-task-four',
  standalone: true,
  templateUrl: './task-four.html',
  styleUrl: './task-four.css'
})
export class TaskFour  {
  // Чи існує елемент у DOM (true/false)
  isElementInDom = signal<boolean>(true);
  
  // Чи запущений процес зникнення (для додавання CSS-класу)
  isHiding = signal<boolean>(false);

  // Метод, який запускає плавну анімацію, а потім видаляє з DOM
  removeItem(): void {
    // 1. Запускаємо CSS-клас з анімацією прозорості
    this.isHiding.set(true);

    // 2. Чекаємо  скільки триває CSS-анімація , після чого видаляємо з DOM
    setTimeout(() => {
      this.isElementInDom.set(false);
      this.isHiding.set(false); // скидаємо стан для можливості повернення
    }, 1000); 
  }

  // Повернути елемент назад (для зручності перевірки)
  restoreItem(): void {
    this.isElementInDom.set(true);
  }
}

