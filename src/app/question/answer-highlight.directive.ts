import { Directive, HostBinding, Input, OnChanges } from '@angular/core';
import { AnswerClass } from './answer-class.enum';

@Directive({
  selector: '[appAnswerHighlight]',
})
export class AnswerHighlightDirective implements OnChanges {
  @Input() appAnswerHighlight: AnswerClass = AnswerClass.OUTLINED_GREEN;

  @HostBinding('class') className: string = AnswerClass.OUTLINED_GREEN;

  ngOnChanges() {
    this.className = this.appAnswerHighlight;
  }
}
