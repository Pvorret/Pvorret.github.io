import { Directive, ElementRef, Input, OnChanges } from '@angular/core';
import { HighlightStyle } from './highlight-style.enum';

@Directive({
  selector: '[appResultHighlight]',
})
export class ResultHighlightDirective implements OnChanges {
  @Input() appResultHighlight: HighlightStyle = HighlightStyle.RED;

  constructor(private element: ElementRef) {}

  ngOnChanges(): void {
    this.element.nativeElement.style.backgroundColor = this.appResultHighlight;
  }
}
