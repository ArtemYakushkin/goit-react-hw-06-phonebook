import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import shortid from 'shortid';
import Notiflix from 'notiflix';

import { FormDesign, LabelDesign, InputDesign, AddBtn } from './Form.styled';

export const Form = () => {
  const [form, setForm] = useState({ name: '', number: '' });

  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

  const handleChange = element => {
    const { name, value } = element.currentTarget;
    setForm(prevForm => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = element => {
    element.preventDefault();

    const data = { id: shortid(), ...form };
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === data.name.toLowerCase()
      )
    ) {
      inputClean();
      return Notiflix.Notify.failure(`${data.name} is already in phonebook`);
    }

    dispatch(addContact(data));

    inputClean();
  };

  const inputClean = () => {
    setForm({ name: '', number: '' });
  };

  const { name, number } = form;
  return (
    <div>
      <FormDesign onSubmit={handleSubmit}>
        <LabelDesign>
          Name
          <InputDesign
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleChange}
          />
        </LabelDesign>
        <LabelDesign>
          Number
          <InputDesign
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleChange}
          />
        </LabelDesign>
        <AddBtn type="submit">
          Add contact
        </AddBtn>
      </FormDesign>
    </div>
  );
};