import {Metadata} from './extra/metadata';
import {ImageFileData} from './extra/data/image/image-file-data';
import {LogFileData} from './extra/data/log/log-file-data';
import {LogDirectoryFileData} from './extra/data/log-directory/log-directory-file-data';
import {TagFileData} from './extra/data/tag/tag-file-data';

export class FileModel {
  id: string;
  metadata: Metadata;
  data: any | ImageFileData | LogFileData | LogDirectoryFileData | TagFileData;
}
