import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultRoutingModule } from './result-routing.module';
import { ResultComponent } from './result.component';
import { QuestionModule } from '../question/question.module';
import { ResultHighlightDirective } from './result-highlight.directive';

@NgModule({
  imports: [CommonModule, QuestionModule, ResultRoutingModule],
  declarations: [ResultComponent, ResultHighlightDirective],
})
export class ResultModule {}
