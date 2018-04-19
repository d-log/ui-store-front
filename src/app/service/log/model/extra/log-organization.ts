export class LogOrganization {
  directoryIDs: string[];
  tagIDs: string[];

  constructor(directoryIDs: string[], tagIDs: string[]) {
    this.directoryIDs = directoryIDs;
    this.tagIDs = tagIDs;
  }
}
