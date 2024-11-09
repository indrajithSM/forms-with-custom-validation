import { Directive, ElementRef } from '@angular/core';
import { NgControl, NgForm } from '@angular/forms';

@Directive({
  selector: '[appAnswerHighlight]',
  standalone: true
})
export class AnswerHighlightDirective {

  constructor(private el:ElementRef,private controlName:NgControl) {

  }
  ngOnInit(){
    console.log(this.controlName.control?.parent);

  }

}
