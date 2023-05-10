import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDelete }) => (
  <div>
    {contacts.length > 0 && <h2 className={styles.contactTitle}>Contacts</h2>}
    <ul>
      {contacts.map((contact) => (
        <li className={styles.contactInfo} key={contact.id}>
          {contact.name}: {contact.number}
          <button
            className={styles.deleteButton}
            onClick={() => onDelete(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  </div>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;