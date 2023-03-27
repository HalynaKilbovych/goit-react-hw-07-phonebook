import { List, Item, DeleteButton } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, getContacts } from 'redux/contactSlice';
import { getFilterValue } from 'redux/filterSlice';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilterValue);

  const filteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const contactsToDisplay = filteredContacts();

  return (
    <List>
      {contactsToDisplay.length === 0 && !filter && (
        <p>No contacts here</p>
      )}
      {contactsToDisplay.length === 0 && filter && (
        <p>No contacts found</p>
      )}
      {contactsToDisplay.map(({ id, name, number }) => (
        <Item key={id}>
          {name}: {number}
          <DeleteButton type="button" onClick={() => dispatch(deleteContact(id))}>
            Delete
          </DeleteButton>
        </Item>
      ))}
    </List>
  );
};