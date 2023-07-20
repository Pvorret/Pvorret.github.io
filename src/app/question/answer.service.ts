import { Injectable } from '@angular/core';
import { AnswerClass } from './answer-class.enum';

@Injectable({
  providedIn: 'root',
})
export class AnswerService {
  getAnswerColor(
    answer: string,
    selectedAnswer: string,
    correctAnswer: string
  ): AnswerClass {
    if (correctAnswer === '') {
      return answer === selectedAnswer
        ? AnswerClass.SOLID_GREEN
        : AnswerClass.OUTLINED_GREEN;
    } else if (answer === correctAnswer) {
      return AnswerClass.SOLID_GREEN;
    } else if (answer === selectedAnswer && answer !== correctAnswer) {
      return AnswerClass.SOLID_RED;
    } else {
      return AnswerClass.OUTLINED_GREEN;
    }
  }
}
