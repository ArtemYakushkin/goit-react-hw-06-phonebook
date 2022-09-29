import { Form } from './Form/Form';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

import { Container, Section, Title, TitleContact } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Section>
        <Title>Phonebook</Title>
        <Form />
      </Section>
      <Section>
        <TitleContact>Contacts</TitleContact>
        <Filter />
        <ContactList />
      </Section>
    </Container>
  );
};
