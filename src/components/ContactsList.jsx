import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './Phonebook.module.css';

const ContactsList = ({ contacts, onDelete }) => (
  <ul>
    {contacts.map(contact => (
      <li key={contact.id}>
        {contact.name}: {contact.number}{' '}
        <button type="button" onClick={e => onDelete(contact.id)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);

export default ContactsList;
