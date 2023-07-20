import { Component, OnInit } from '@angular/core';
import { Answer } from '../shared/answer';
import { HighlightStyle } from './highlight-style.enum';
import { ResultService } from './result.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
})
export class ResultComponent implements OnInit {
  selectedAnswers: Answer[] = [];
  highlightStyle: HighlightStyle = HighlightStyle.RED;
  scored: number = 0;

  constructor(private readonly resultService: ResultService) {}

  ngOnInit() {
    this.selectedAnswers = history.state.data as Answer[];
    this.scored = this.resultService.getScore(this.selectedAnswers);
    this.highlightStyle = this.resultService.getHightStyle(this.scored);
  }
}
