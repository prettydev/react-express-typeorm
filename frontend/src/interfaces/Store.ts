import GuestBookModel from './GuestBookModel';
import InvoiceModel from './InvoiceModel';
import UserModel from './UserModel';

export default interface Store {
  guestbook: GuestBookModel;
  invoice: InvoiceModel;
  user: UserModel;
}
