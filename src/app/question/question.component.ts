import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Answer } from '../shared/answer';
import { Quiz } from '../shared/quiz/quiz';
import { AnswerClass } from './answer-class.enum';
import { AnswerService } from './answer.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent implements OnChanges {
  @Input() public quiz: Quiz | undefined;
  @Input() public answer: Answer | undefined;
  @Output() public answerSelected: EventEmitter<Answer> = new EventEmitter<Answer>();
  public selectedAnswer: string = '';
  public allAnswers: string[] = [];
  private correctAnswer: string = '';

  public constructor(private readonly answerService: AnswerService) {}

  public ngOnChanges(change: SimpleChanges): void {
    this.allAnswers = [];

    if (change['quiz']?.currentValue) {
      this.setupAllAnswers(
        change['quiz'].currentValue.correct_answer,
        change['quiz'].currentValue.incorrect_answers
      );
      this.allAnswers = this.allAnswers.sort(() => Math.random() - 0.5);
    }

    if (change['answer']?.currentValue) {
      this.selectedAnswer = change['answer'].currentValue.selectedAnswer;
      this.correctAnswer = change['answer'].currentValue.correctAnswer;
      this.allAnswers = change['answer'].currentValue.allAnswers;
    }
  }

  public getBtnClass(answer: string): AnswerClass {
    return this.answerService.getAnswerColor(
      answer,
      this.selectedAnswer,
      this.correctAnswer
    );
  }

  public onAnswerClick(selectedAnswer: string): void {
    if (this.quiz) {
      this.selectedAnswer = selectedAnswer;

      this.answerSelected.emit({
        question: this.quiz.question,
        correctAnswer: this.quiz.correct_answer,
        selectedAnswer: selectedAnswer,
        allAnswers: this.allAnswers,
      });
    }
  }

  private setupAllAnswers(
    correctAnswer: string,
    incorrectAnswers: string[]
  ): void {
    this.allAnswers = this.allAnswers.concat(incorrectAnswers, correctAnswer);
  }
}
