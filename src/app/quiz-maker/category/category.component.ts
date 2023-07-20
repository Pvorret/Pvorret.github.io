import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { OpenTriviaEndpointsService } from '../../shared/open-trivia-endpoints.service';
import { Category } from '../../shared/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit, OnDestroy {
  @Output() categorySelect: EventEmitter<Category> =
    new EventEmitter<Category>();
  categories: Category[] = [];
  private destroy: Subject<boolean> = new Subject<boolean>();

  constructor(
    private readonly oTEndpointsService: OpenTriviaEndpointsService
  ) {}

  ngOnInit(): void {
    this.oTEndpointsService
      .getCategories()
      .pipe(takeUntil(this.destroy))
      .subscribe((categories: Category[]) => {
        this.categories = categories;
      });
  }

  ngOnDestroy(): void {
    this.destroy.next(true);
    this.destroy.complete();
  }

  onCategoryChange(selectedCategory: Category): void {
    this.categorySelect.emit(selectedCategory);
  }
}
