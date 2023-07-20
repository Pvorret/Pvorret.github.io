import { Component, EventEmitter, Output } from '@angular/core';
import { Difficulty } from '../../shared/difficulty';

@Component({
  selector: 'app-difficulty',
  templateUrl: './difficulty.component.html',
  styleUrls: ['./difficulty.component.css'],
})
export class DifficultyComponent {
  @Output() public difficultySelect: EventEmitter<Difficulty> =
    new EventEmitter<Difficulty>();
  public difficulties: Difficulty[] = [
    { id: 1, value: 'Easy' },
    { id: 2, value: 'Medium' },
    { id: 3, value: 'Hard' },
  ];

  public onDifficultyChange(selectedDifficulty: Difficulty): void {
    this.difficultySelect.emit(selectedDifficulty);
  }
}
