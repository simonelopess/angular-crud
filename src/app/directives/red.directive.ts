import { Directive, ElementRef } from '@angular/core';

/* exemplo de diretiva de elemento */
@Directive({
  selector: '[appRed]'
})
export class RedDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.color = 'red';
  }

}
