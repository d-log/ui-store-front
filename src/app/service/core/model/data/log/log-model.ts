import {LogDisplayOverride} from './extra/log-type-override/log-display-override';
import {TagModel} from '../tag/tag-model';
import {LogContent} from './extra/log-content/log-content';
import {LogOrganization} from './extra/log-organization';
import {Metadata} from '../metadata';

export class LogModel {
  id: string;
  metadata: Metadata;
  logDisplayType: string;
  logOrganization: LogOrganization;
  logContents: LogContent[];
  logDisplayOverride: LogDisplayOverride;

  // LogTypes
  parentLogModels: LogModel[];
  childLogModels: LogModel[];
  tagModels: TagModel[];
  numLogContents: number;
  ancestryLogModels: LogModel[];
}
