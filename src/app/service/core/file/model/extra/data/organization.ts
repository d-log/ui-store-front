export class Organization {
  parentLogDirectoryFileIDs: string[];
  tagFileIDs: string[];

  constructor(parentLogDirectoryFileIDs: string[], tagFileIDs: string[]) {
    this.parentLogDirectoryFileIDs = parentLogDirectoryFileIDs;
    this.tagFileIDs = tagFileIDs;
  }
}
