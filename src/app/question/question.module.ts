import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { QuestionComponent } from './question.component';
import { AnswerHighlightDirective } from './answer-highlight.directive';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [QuestionComponent, AnswerHighlightDirective],
  exports: [QuestionComponent],
})
export class QuestionModule {}
