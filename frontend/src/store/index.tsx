import { createStore } from 'easy-peasy';

import Store from '../interfaces/Store';
import GuestBook from './GuestBook';
import Invoice from './Invoice';
import User from './User';

const store: Store = {
  guestbook: GuestBook,
  invoice: Invoice,
  user: User,
};

export default createStore<Store>(store);
