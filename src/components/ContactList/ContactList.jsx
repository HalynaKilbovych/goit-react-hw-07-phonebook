import { List, Item, DeleteButton } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getFilterValue } from 'redux/filterSlice';
import { deleteContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';
import { Notification } from 'components/Notifacation/Notifacation';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(getFilterValue);

  const filteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    const filtered = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    if (filtered.length === 0 && filter) {
      Notification();
    }
    // if (onError) {
    //   Notification();
    // }
    return filtered;
  };

  const contactsToDisplay = filteredContacts(); 

  return (
    <List>
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