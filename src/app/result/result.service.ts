import { Injectable } from '@angular/core';
import { Answer } from '../shared/answer';
import { HighlightStyle } from './highlight-style.enum';

@Injectable({
  providedIn: 'root',
})
export class ResultService {
  getScore(selectedAnswers: Answer[]): number {
    let tmpScore: number = 0;

    for (const answer of selectedAnswers) {
      tmpScore =
        answer.selectedAnswer === answer.correctAnswer
          ? tmpScore + 1
          : tmpScore;
    }

    return tmpScore;
  }

  getHightStyle(score: number): HighlightStyle {
    if (score >= 4) {
      return HighlightStyle.GREEN;
    } else if (score < 4 && score >= 2) {
      return HighlightStyle.YELLOW;
    } else {
      return HighlightStyle.RED;
    }
  }
}
