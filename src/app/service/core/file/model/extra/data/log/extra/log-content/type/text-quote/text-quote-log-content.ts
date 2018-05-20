export class TextQuoteLogContent {
  // required
  text: string;
  // optional, if not provided default to unknown
  formOfCommunication: string; // such as: teacher to student
  sourceType: string; // such as: book,  movie, song,
  sourceName: string; // such as: Bible, Her,   Hey Jude,
}
