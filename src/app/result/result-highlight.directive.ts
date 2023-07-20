import { Directive, ElementRef, Input, OnChanges } from '@angular/core';
import { HighlightStyle } from './highlight-style.enum';

@Directive({
  selector: '[appResultHighlight]',
})
export class ResultHighlightDirective implements OnChanges {
  @Input() public appResultHighlight: HighlightStyle = HighlightStyle.RED;

  public constructor(private element: ElementRef) {}

  public ngOnChanges(): void {
    this.element.nativeElement.style.backgroundColor = this.appResultHighlight;
  }
}
