import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

import { ItemContact, DelBtn } from './ContactListItem.styled';

export const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const deleteContacts = id => dispatch(deleteContact(id));

  return (
    <ItemContact id={id}>
      {name}: {number}
      <DelBtn onClick={() => deleteContacts(id)}>
        Delete
      </DelBtn>
    </ItemContact>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};