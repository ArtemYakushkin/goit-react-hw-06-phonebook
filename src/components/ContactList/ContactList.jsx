import { useSelector } from 'react-redux';
import { ContactListItem } from '../ContactListItem/CotactListItem';

import { ListContacts } from './ContactList.styled';

const getContacts = (items, filter) =>
  items.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

export const ContactList = () => {
  const items = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const contacts = getContacts(items, filter);
  return (
    <ListContacts>
      {contacts.length
        ? contacts.map(({ id, name, number }) => (
            <ContactListItem key={id} id={id} name={name} number={number} />
          ))
        : 'No contacts'}
    </ListContacts>
  );
};