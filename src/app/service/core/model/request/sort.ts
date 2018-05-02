import {SortOrder} from './sort-order';

export class Sort {
  parameter: string;
  order: SortOrder;

  constructor(parameter: string, order: SortOrder) {
    this.parameter = parameter;
    this.order = order;
  }
}
