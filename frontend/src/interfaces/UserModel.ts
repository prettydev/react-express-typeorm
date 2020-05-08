import { Action, Thunk, Computed } from 'easy-peasy';

import UserEntry from './UserEntry';

export default interface InvoiceModel {
  entries: UserEntry[];
  reverseEntries: Computed<InvoiceModel, UserEntry[]>;
  setEntries: Action<InvoiceModel, UserEntry[]>;
  addEntry: Action<InvoiceModel, UserEntry>;
  createEntry: Thunk<InvoiceModel, UserEntry>;
  getEntries: Thunk<InvoiceModel>;
}
