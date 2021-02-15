export class CreateQuestionDto {
  readonly name: string;
  readonly answers: { [key: string]: string };
  readonly question: string;
}
