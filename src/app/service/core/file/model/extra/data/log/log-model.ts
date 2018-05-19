import {LogOrganization} from './extra/log-organization';
import {LogDisplayOverride} from './extra/log-type-override/log-display-override';
import {TagModel} from '../tag/tag-model';
import {LogContent} from './extra/log-data/log-content';
import {Metadata} from '../../metadata';

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
}
