import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Category } from './category/category';
import { Quiz } from './quiz/quiz';
import { QuizDTO } from './quiz/quiz-dto';
import { CategoryDTO } from './category/category-dto';

@Injectable({
  providedIn: 'root',
})
export class OpenTriviaEndpointsService {
  constructor(private readonly httpClient: HttpClient) {}

  public getCategories(): Observable<Category[]> {
    const url: string = 'https://opentdb.com/api_category.php';

    return this.httpClient
      .get<CategoryDTO>(url)
      .pipe(
        map((httpCategories: CategoryDTO) => httpCategories.trivia_categories)
      );
  }

  public getQuiz(
    selectCategory: number,
    selectedDifficulty: string
  ): Observable<Quiz[]> {
    const url: string = `https://opentdb.com/api.php?amount=5&category=${selectCategory}&difficulty=${selectedDifficulty.toLowerCase()}&type=multiple`;

    return this.httpClient
      .get<QuizDTO>(url)
      .pipe(map((httpQuiz: QuizDTO) => httpQuiz.results));
  }
}
