import React, { useState } from 'react';
import PhoneApp from './PhoneApp/PhoneApp';

export const App = () => {
  const [contacts, setContacts] = useState(PhoneApp.defaultProps.initialContacts);
  const [filter, setFilter] = useState('');

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <PhoneApp
        contacts={contacts}
        setContacts={setContacts}
        filter={filter}
        setFilter={setFilter}
      />
    </div>
  );
};