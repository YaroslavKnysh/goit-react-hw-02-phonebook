import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => (
  <input
    value={value}
    onChange={e => onChange(e.currentTarget.value)}
    type="text"
    name="name"
    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    required
  />
);

export default Filter;
