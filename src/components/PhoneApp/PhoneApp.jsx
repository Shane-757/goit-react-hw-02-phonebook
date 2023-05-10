import React, { useState } from 'react';
//import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import ContactForm from 'components/ContactForm/ContactFrom';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';




const PhoneApp = ({ initialContacts }) => {
  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState('');

  const handleDelete = (id) => {
    setContacts((prevState) => prevState.filter((contact) => contact.id !== id));
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase()) ||
    contact.number.includes(filter)
  );

   return (
    <div className="PhoneApp">
      <h1>Phone Book</h1>
      <ContactForm contacts={contacts} setContacts={setContacts} />
      <Filter filter={filter} setFilter={setFilter} />
      <ContactList contacts={filteredContacts} onDelete={handleDelete} />
    </div>
  );
};

PhoneApp.propTypes = {
  initialContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

PhoneApp.defaultProps = {
  initialContacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
};

export default PhoneApp;