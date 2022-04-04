import { Directive, ElementRef } from '@angular/core';

//Para manipular el comportamiento del dom dinamicamente: no es buena practica
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(element: ElementRef) { 
    element.nativeElement.style.backgroundColor = 'red';
  }

}
