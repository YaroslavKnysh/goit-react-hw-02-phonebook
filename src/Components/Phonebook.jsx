import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './Phonebook.module.css';
import { nanoid } from 'nanoid';

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
      name: '',
      number: '',
    };
  }
  filterContacts() {
    return this.state.contacts.filter(item =>
      item.name.toLowerCase().includes(this.state.filter.toLowerCase()),
    );
  }

  addContact() {
    if (
      this.state.contacts.find(
        item => item.name.toLowerCase() === this.state.name.toLowerCase(),
      )
    ) {
      return window.alert(`${this.state.name} is already in contacts`);
    } else {
      this.setState({
        contacts: [
          ...this.state.contacts,
          {
            id: nanoid(),
            name: this.state.name,
            number: this.state.number,
          },
        ],

        name: '',
        number: '',
      });
    }
  }
  deleteContact() {
    this.filterContacts().map(contact =>
      this.setState({
        contacts: this.state.contacts.filter(item => item.id !== contact.id),
      }),
    );
  }
  render() {
    return (
      <div>
        <label>Name</label>
        <input
          value={this.state.name}
          onChange={e => this.setState({ name: e.currentTarget.value })}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label>Number</label>
        <input
          value={this.state.number}
          onChange={e => this.setState({ number: e.currentTarget.value })}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button
          type="button"
          onClick={e => {
            this.addContact();
          }}
        >
          Add contact
        </button>
        <h2>Contacts</h2>
        <h3>Find contacts by name</h3>
        <input
          value={this.state.filter}
          onChange={e => this.setState({ filter: e.currentTarget.value })}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <ul>
          {this.filterContacts().map(contact => (
            <li key={contact.id}>
              {contact.name}: {contact.number}{' '}
              <button
                type="button"
                onClick={e => {
                  this.deleteContact();
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export { Phonebook };
