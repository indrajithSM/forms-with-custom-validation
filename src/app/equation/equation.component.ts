import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MathValidators } from '../math-validators';
import { delay, filter, scan } from 'rxjs';
import { AnswerHighlightDirective } from '../answer-highlight.directive';

@Component({
  selector: 'app-equation',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,AnswerHighlightDirective],
  templateUrl: './equation.component.html',
  styleUrl: './equation.component.scss',
})
export class EquationComponent implements OnInit {
  mathForm = new FormGroup(
    {
      a: new FormControl(this.randomNumber()),
      b: new FormControl(this.randomNumber()),
      // answer:new MathValidators('')
      answer: new FormControl(''),
    },
    [
      MathValidators.addition('answer', 'a', 'b'),
      // Validators.required,  //! Not need to be invoke like not need to pass any value ,
      // Validators.minLength(11), //! Need to invoke like need to send the min length value.
    ]
  );
  secondsPerSolution: number = 0;
  constructure() {}
  ngOnInit() {
    this.mathForm.statusChanges
      .pipe(
        filter((value) => value === 'VALID'),
        delay(250),
        scan(
          (acc: any) => {
            return {
              numberSolved: acc.numberSolved + 1,
              startTime: acc.startTime,
            };
          },
          { numberSolved: 0, startTime: new Date() }
        )
      )
      .subscribe(({ numberSolved, startTime }) => {
        this.secondsPerSolution =
          (new Date().getTime() - startTime.getTime()) / numberSolved / 1000;
        this.mathForm.setValue({
          a: this.randomNumber(),
          b: this.randomNumber(),
          answer: '',
        });
      });
  }
  randomNumber() {
    return Math.floor(Math.random() * 10);
  }
  get a() {
    return this.mathForm.value.a;
  }
  get b() {
    return this.mathForm.value.b;
  }
}
