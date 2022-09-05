// import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Section from './Section/Section';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

// import { addContactsItem, deleteContactsItem, setFiter } from 'redux/actions';
import { addContactsItem, deleteContactsItem } from 'redux/items/items-actions';
import { setFiter } from 'redux/filter/filter-actions';
import { getContactsItems } from 'redux/items/items-selectors';
import { getContactsFilter } from 'redux/filter/filter-selectors';
// import { getContactsItems, getContactsFilter } from 'redux/selectors';

import s from './App.module.css';

function App() {
  const contactsItems = useSelector(getContactsItems);
  const contactsFilter = useSelector(getContactsFilter);
  const dispatch = useDispatch();
  function onAddContactsItem(name, number) {
    const action = addContactsItem(name, number);

    const nameArr = contactsItems.map(contact => contact.name);
    if (nameArr.includes(name)) {
      alert(`${name} is already in contacts`);
      return;
    }
    dispatch(action);
  }

  function onDeleteContactsItem(contactId) {
    dispatch(deleteContactsItem(contactId));
  }

  // const [contacts, setContacts] = useState(() => {
  //   return JSON.parse(localStorage.getItem('contacts')) || '';
  // });

  // useEffect(() => {
  //   console.log('useEffect');

  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  function getfilterContacts() {
    const normFilter = contactsFilter.toLowerCase();
    const filterContacts = contactsItems.filter(contact =>
      contact.name.toLowerCase().includes(normFilter)
    );
    return filterContacts;
  }

  const filterContacts = getfilterContacts();

  return (
    <div className={s.set}>
      <Section title="Phonebook">
        <ContactForm onSubmit={onAddContactsItem} />
      </Section>
      <Section title="Contacts">
        <Filter
          value={contactsFilter}
          onChange={event => dispatch(setFiter(event.currentTarget.value))}
        />
        <ContactList
          contacts={filterContacts}
          onDeleteContact={onDeleteContactsItem}
        />
      </Section>
    </div>
  );
}
export default App;

// ===================================
// contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],

// ======================================================
