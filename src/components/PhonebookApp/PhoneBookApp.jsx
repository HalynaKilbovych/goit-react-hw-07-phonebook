import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactList } from "components/ContactList/ContactList";
import { Filter } from "components/Filter/Filter";
import { Wrapper, Title, ContactTitle } from "./PhoneBookApp.styled";

export const PhoneBookApp = () => {

  return (
    <Wrapper>
      <Title>Phonebook</Title>
        <ContactForm></ContactForm>
      <ContactTitle>Contacts</ContactTitle>
        <Filter/>
        <ContactList/>
    </Wrapper>
  );
};