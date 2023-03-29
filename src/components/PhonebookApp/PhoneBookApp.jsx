import { useSelector } from "react-redux";
import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactList } from "components/ContactList/ContactList";
import { Filter } from "components/Filter/Filter";
import { Wrapper, Title, ContactTitle } from "./PhoneBookApp.styled";
import { Loader } from "components/Loader/Loader";
import { selectIsLoading } from "redux/contact/selectors";

export const PhoneBookApp = () => {

  const isLoading = useSelector(selectIsLoading);

  return (
    <Wrapper>
    {isLoading && <Loader />}
      <Title>Phonebook</Title>
        <ContactForm></ContactForm>
      <ContactTitle>Contacts</ContactTitle>
        <Filter/>
        <ContactList/>
    </Wrapper>
  );
};