import { Quiz } from './quiz';

export interface QuizDTO {
  response_code: number;
  results: Quiz[];
}
