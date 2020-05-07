import { Action, Thunk, Computed } from 'easy-peasy';

import InvoiceEntry from './InvoiceEntry';

export default interface InvoiceModel {
  entries: InvoiceEntry[];
  reverseEntries: Computed<InvoiceModel, InvoiceEntry[]>;
  setEntries: Action<InvoiceModel, InvoiceEntry[]>;
  addEntry: Action<InvoiceModel, InvoiceEntry>;
  createEntry: Thunk<InvoiceModel, InvoiceEntry>;
  getEntries: Thunk<InvoiceModel>;
}
