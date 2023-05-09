import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';


class PhoneApp extends Component {
  static propTypes = {
    initialContacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
      })
    )
  };

  static defaultProps = {
    initialContacts: []
  };

  constructor(props) {
    super(props);
    this.state = {
      contacts: props.initialContacts,
      name: ''
    };
  }

  handleInputChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const newContact = {
      id: nanoid(),
      name: this.state.name
    };
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
      name: ''
    }));
  };

  render() {
    return (
      <div className="PhoneApp">
        <h1>Phone Book</h1>
        <form onSubmit={this.handleSubmit}>
          <h2>Name</h2>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
            required
            value={this.state.name}
            onChange={this.handleInputChange}
          />
          <button type="submit">Add Contact</button>
        </form>
        <ul>
          {this.state.contacts.map((contact) => (
            <li key={contact.id}>{contact.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default PhoneApp;