// import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

// @Component({
//   imports: [RouterOutlet],
//   selector: 'app-root',
//   styleUrl: './app.css',
//   templateUrl: './app.html',
// })
// export class App {
//   protected readonly title = signal('homework-3');
// }
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}