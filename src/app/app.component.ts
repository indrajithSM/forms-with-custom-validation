import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { EquationComponent } from './equation/equation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,EquationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mathProblem';
}
