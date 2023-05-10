import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import ContactForm from 'components/ContactForm/ContactFrom';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';



class PhoneApp extends Component {
  static propTypes = {
    initialContacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ),
  };

  static defaultProps = {
    initialContacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };

  constructor(props) {
    super(props);
    this.state = {
      contacts: props.initialContacts,
      name: '',
      number: '',
      filter: '',
    };
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const newContact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
      name: '',
      number: '',
    }));
  };

  handleFilterChange = (filterValue) => {
    this.setState({ filter: filterValue });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter) ||
      contact.number.includes(filter)
    );
  };

  render() {
    const filteredContacts = this.getFilteredContacts();
    return (
      <div className="PhoneApp">
        <h1>Phone Book</h1>
        <ContactForm
          name={this.state.name}
          number={this.state.number}
          handleInputChange={this.handleInputChange}
          handleSubmit={this.handleSubmit}
        />
        <Filter onFilterChange={this.handleFilterChange} />
        <ContactList contacts={filteredContacts} />
      </div>
    );
  }
}

export default PhoneApp;