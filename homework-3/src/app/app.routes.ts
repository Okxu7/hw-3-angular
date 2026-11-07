// import { Routes } from '@angular/router';

// export const routes: Routes = [];

import { Routes } from '@angular/router';
import { TaskOne } from './pages/task-one/task-one'; // Якщо Angular 17-19: TaskOneComponent з './pages/task-one/task-one.component'
import { TaskTwo } from './pages/task-two/task-two';
import { TaskThree } from './pages/task-three/task-three';
import { TaskFour } from './pages/task-four/task-four';

export const routes: Routes = [
  { path: '', redirectTo: 'task-1', pathMatch: 'full' }, // За замовчуванням відкриваємо Завдання 1
  { path: 'task-1', component: TaskOne },
  { path: 'task-2', component: TaskTwo },
  { path: 'task-3', component: TaskThree },
  { path: 'task-4', component: TaskFour },
];
