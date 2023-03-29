import { List, Item, DeleteButton } from './ContactList.styled';
import { useSelector, useDispatch} from 'react-redux';
import { useEffect } from 'react';
import { deleteContact, fetchContacts } from 'redux/operations';
import { selectContacts, selectError, selectFilter,selectIsLoading } from 'redux/selectors';
import { notificationNoContact, notificationError } from 'components/Notifacation/Notifacation';
import { Loader } from "components/Loader/Loader";

export const ContactList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const contacts = useSelector(selectContacts);
  const onError = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);


  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


  const filteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    const filtered = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    if (filtered.length === 0 && filter) {
      notificationNoContact(); 
    }
    if (onError) {
      notificationError();
    }
    return filtered;
  };

  const contactsToDisplay = filteredContacts(); 


  return (
    <List>
      {isLoading && <Loader />}
      {contactsToDisplay.map(({ id, name, number }) => (
        <Item key={id}>
          {name}: {number}
          <DeleteButton 
              type="button"   
              onClick={() => dispatch(deleteContact(id))} 
          >
            Delete
          </DeleteButton>
        </Item>
      ))}
    </List>
  );
};