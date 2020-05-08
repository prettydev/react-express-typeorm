import { action, thunk, computed } from 'easy-peasy';

import UserModel from '../interfaces/UserModel';

const User: UserModel = {
  entries: [],
  reverseEntries: computed(state => state.entries.slice().reverse()),
  setEntries: action((state, entries) => {
    state.entries = entries;
  }),
  addEntry: action((state, entry) => {
    state.entries.push(entry);
  }),
  createEntry: thunk(async (state, entry) => {
    const response = await fetch('http://localhost:8000/user', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(entry),
    });

    const result = await response.json();
    state.addEntry(result);
  }),
  getEntries: thunk(async state => {
    const response = await fetch('http://localhost:8000/user');
    const entries = await response.json();
    state.setEntries(entries);
  }),
};

export default User;
