import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[inputUppercase]',
})
export class InputUppercaseDirective {
  constructor(private el: ElementRef) {
    this.el.nativeElement.onkeyup = () => {
      this.el.nativeElement.value = this.el.nativeElement.value.toUpperCase();
    };
  }
}
