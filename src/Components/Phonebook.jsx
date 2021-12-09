import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './Phonebook.module.css';
import { nanoid } from 'nanoid';
import ContactsList from './ContactsList';
import Filter from './Filter';
import ContactsForm from './ContactForm';

class Phonebook extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ],
      filter: '',
    };
  }
  filterContacts() {
    return this.state.contacts.filter(item =>
      item.name.toLowerCase().includes(this.state.filter.toLowerCase()),
    );
  }

  deleteContact(id) {
    this.setState({
      contacts: this.state.contacts.filter(item => item.id !== id),
    });
  }
  render() {
    return (
      <div>
        <ContactsForm
          onAddContact={contact =>
            this.setState({
              contacts: [...this.state.contacts, contact],
            })
          }
          contacts={this.state.contacts}
        />

        <h2>Contacts</h2>
        <h3>Find contacts by name</h3>
        <Filter
          value={this.state.filter}
          onChange={filter => this.setState({ filter })}
        />
        <ContactsList
          contacts={this.filterContacts()}
          onDelete={id => this.deleteContact(id)}
        />
      </div>
    );
  }
}

export { Phonebook };
