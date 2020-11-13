import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: 'theorytab'
})
export class TheorytabDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
 }

}
