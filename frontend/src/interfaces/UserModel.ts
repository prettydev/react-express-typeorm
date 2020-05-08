import { Action, Thunk, Computed } from 'easy-peasy';

import UserEntry from './UserEntry';

export default interface UserModel {
  entries: UserEntry[];
  entry: UserEntry;
  reverseEntries: Computed<UserModel, UserEntry[]>;
  setEntries: Action<UserModel, UserEntry[]>;
  setEntry: Action<UserModel, UserEntry>;
  addEntry: Action<UserModel, UserEntry>;
  createEntry: Thunk<UserModel, UserEntry>;
  getEntries: Thunk<UserModel>;
  getEntry: Thunk<UserModel>;
}
