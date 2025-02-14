import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <nav class="p-2 bg-light border-bottom">
      <a routerLink="/cadastro" class="btn btn-primary me-2">Cadastro</a>
      <a routerLink="/consulta" class="btn btn-secondary">Consulta</a>
    </nav>
    <div class="container mt-3">
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {}

