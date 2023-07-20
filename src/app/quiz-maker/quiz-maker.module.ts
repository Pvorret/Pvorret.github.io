import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { CategoryComponent } from './category/category.component';
import { DifficultyComponent } from './difficulty/difficulty.component';
import { QuizMakerRoutingModule } from './quiz-maker-routing.module';
import { QuizMakerComponent } from './quiz-maker.component';
import { CommonModule } from '@angular/common';
import { QuestionModule } from '../question/question.module';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    NgSelectModule,
    QuestionModule,
    QuizMakerRoutingModule,
  ],
  declarations: [QuizMakerComponent, CategoryComponent, DifficultyComponent],
})
export class QuizMakerModule {}
