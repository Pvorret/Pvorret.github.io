import { Injectable } from '@angular/core';
import { Answer } from '../shared/answer';
import { Quiz } from '../shared/quiz/quiz';
@Injectable({
  providedIn: 'root',
})
export class QuizMakerService {

  public sortSelectedAnswers(selectedAnswers: Answer[], quizList: Quiz[]): Answer[] {
    if (selectedAnswers.length > 0 && quizList.length > 0) {
      return selectedAnswers.sort((a, b) =>
        quizList.findIndex((q) => q.question === a.question) -
        quizList.findIndex((q) => q.question === b.question));
    }

    return selectedAnswers;
  }
}
