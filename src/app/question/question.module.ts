import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { QuestionComponent } from './question.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [QuestionComponent],
  exports: [QuestionComponent],
})
export class QuestionModule {}
