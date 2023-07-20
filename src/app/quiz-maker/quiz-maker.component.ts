import { Component, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Answer } from '../shared/answer';
import { Category } from '../shared/category';
import { Difficulty } from '../shared/difficulty';
import { OpenTriviaEndpointsService } from '../shared/open-trivia-endpoints.service';
import { Quiz } from '../shared/quiz';

@Component({
  selector: 'app-quiz-maker',
  templateUrl: './quiz-maker.component.html',
  styleUrls: ['./quiz-maker.component.css'],
})
export class QuizMakerComponent implements OnDestroy {
  quizList: Quiz[] = [];
  selectedAnswers: Answer[] = [];
  private selectedCategory: Category | undefined;
  private selectedDifficulty: Difficulty | undefined;
  private destroy: Subject<boolean> = new Subject<boolean>();

  constructor(
    private readonly oTEndpointsService: OpenTriviaEndpointsService
  ) {}

  ngOnDestroy(): void {
    this.destroy.next(true);
    this.destroy.complete();
  }

  onCategorySelect(selectedCategory: Category): void {
    this.selectedCategory = selectedCategory;
  }

  onDifficultySelect(selectedDifficulty: Difficulty): void {
    this.selectedDifficulty = selectedDifficulty;
  }

  onCreate(): void {
    if (this.selectedCategory && this.selectedDifficulty) {
      this.oTEndpointsService
        .getQuiz(this.selectedCategory.id, this.selectedDifficulty.value)
        .pipe(takeUntil(this.destroy))
        .subscribe((quiz: Quiz[]) => {
          this.quizList = quiz;
          this.selectedAnswers = [];
        });
    }
  }

  onAnswerSelected(selectedAnswer: Answer): void {
    if (
      !this.selectedAnswers.some((a) => a.question === selectedAnswer.question)
    ) {
      this.selectedAnswers.push(selectedAnswer);
    } else {
      this.selectedAnswers[
        this.selectedAnswers.findIndex(
          (a) => a.question === selectedAnswer.question
        )
      ].selectedAnswer = selectedAnswer.selectedAnswer;
    }
  }
}