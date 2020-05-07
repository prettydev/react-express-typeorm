import { createStore } from 'easy-peasy';

import Store from '../interfaces/Store';
import GuestBook from './GuestBook';
import Invoice from './Invoice';

const store: Store = {
  guestbook: GuestBook,
  invoice: Invoice,
};

export default createStore<Store>(store);
