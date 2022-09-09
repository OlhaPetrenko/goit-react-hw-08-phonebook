import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import Section from './Section/Section';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

import { filterSlice } from 'redux/filter/filter-slice';

import {
  fetchContacts,
  addContactItem,
  deleteContactItem,
} from 'redux/items/items-operations';

import {
  getContactsItems,
  getLoading,
  getError,
} from 'redux/items/items-selectors';
import { getContactsFilter } from 'redux/filter/filter-selectors';

import s from './App.module.css';

function App() {
  const { setFilter } = filterSlice.actions;

  const contactsItems = useSelector(getContactsItems);
  const loading = useSelector(getLoading);
  const error = useSelector(getError);
  const contactsFilter = useSelector(getContactsFilter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  function onAddContactsItem(data) {
    const nameArr = contactsItems.map(contact => contact.name.toLowerCase());
    const numberArr = contactsItems.map(contact => contact.phone);

    if (nameArr.includes(data.name.toLowerCase())) {
      alert(`${data.name} is already in contacts`);
      return;
    }
    if (numberArr.includes(data.number)) {
      alert(`${data.number} is already in contacts`);
      return;
    }

    dispatch(addContactItem(data));
  }

  function onDeleteContactItem(contactId) {
    dispatch(deleteContactItem(contactId));
  }

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
          onChange={event => dispatch(setFilter(event.currentTarget.value))}
        />
        {!loading && filterContacts.length > 0 && (
          <ContactList
            contacts={filterContacts}
            onDeleteContact={onDeleteContactItem}
          />
        )}
        {loading && <h2>Процес завантаження триває......</h2>}
        {!loading && error && <h2> {error} :(((</h2>}
      </Section>
    </div>
  );
}
export default App;
