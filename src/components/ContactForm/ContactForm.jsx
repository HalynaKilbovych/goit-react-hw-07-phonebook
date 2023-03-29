import React, { useState } from 'react';
import { nanoid } from "nanoid";
import { Form, Label, Input, Button } from "./ContactForm.styled";
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';
import { notificationSameName, notificationSameNumber } from 'components/Notifacation/Notifacation';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      notificationSameName(name);
      return;
    } else if (contacts.find(contact => contact.number === number)) {
      notificationSameNumber(number);
      return;
    } else {
      dispatch(addContact({ name, phone: number, id: nanoid() }));
      resetForm();
    }
  };

  const resetForm = () => {
    setName('');
    setNumber('');
    setErrorMessage('');
  };

  return (
    <Form onSubmit={handleSubmitForm}>
      {errorMessage && <p>{errorMessage}</p>}
      <Label>
        Name
        <Input
          value={name}
          onChange={handleChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label htmlFor="">
        Number
        <Input
          value={number}
          onChange={handleChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};