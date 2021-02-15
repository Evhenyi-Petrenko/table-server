export class UpdateQuestionDto {
  readonly name: string;
  readonly answers: { [key: string]: string };
  readonly question: string;
}
