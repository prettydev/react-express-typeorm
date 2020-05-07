import GuestBookModel from './GuestBookModel';
import InvoiceModel from './InvoiceModel';

export default interface Store {
  guestbook: GuestBookModel;
  invoice: InvoiceModel;
}
