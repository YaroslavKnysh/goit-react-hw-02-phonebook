import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './Phonebook.module.css';
import { nanoid } from 'nanoid';

const ContactsForm = ({ onAddContact, contacts }) => {
  const [name, setName] = React.useState('');
  const [number, setNumber] = React.useState('');

  const addContact = () => {
    if (contacts.find(item => item.name.toLowerCase() === name.toLowerCase())) {
      return window.alert(`${name} is already in contacts`);
    } else {
      onAddContact({
        id: nanoid(),
        name,
        number,
      });
      setName('');
      setNumber('');
    }
  };
  return (
    <div>
      <label>Name</label>
      <input
        value={name}
        onChange={e => setName(e.currentTarget.value)}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label>Number</label>
      <input
        value={number}
        onChange={e => setNumber(e.currentTarget.value)}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button type="submit" onClick={addContact}>
        Add contact
      </button>
    </div>
  );
};

export default ContactsForm;
