import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import Section from './Section/Section';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

// import { addContactsItem, deleteContactsItem } from 'redux/items/items-actions';
import { setFilter } from 'redux/filter/filter-actions';

import {
  fetchContacts,
  addContactItem,
  deleteContactItem,
} from '../redux/items/items-operations';
// =========================================
// import { filterSlise } from 'redux/filter/filter-reducer';
// import { itemsSlice } from 'redux/items/items-reducer';
// ============================================================

import {
  getContactsItems,
  getLoading,
  getError,
} from 'redux/items/items-selectors';
// import { getContactsFilter } from 'redux/filter/filter-selectors';

import s from './App.module.css';

function App() {
  // const { setFilter } = filterSlise.actions;
  // const { addContactsItem, deleteContactsItem } = itemsSlice.actions;

  const contactsItems = useSelector(getContactsItems);
  const loading = useSelector(getLoading);
  const error = useSelector(getError);
  // const contactsFilter = useSelector(getContactsFilter);
  const contactsFilter = useSelector(store => store.contacts.filter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  function onAddContactsItem(name, number) {
    const nameArr = contactsItems.map(contact => contact.name.toLowerCase());
    const numberArr = contactsItems.map(contact => contact.phone);
    console.log('numberArr', numberArr); /// delete at the end

    if (nameArr.includes(name.toLowerCase())) {
      alert(`${name} is already in contacts`);
      return;
    }
    // if (numberArr.includes(number)) {
    //   alert(`${number} is already in contacts`);
    //   return;
    // } = проверка на номер - вконце оставить

    dispatch(addContactItem(name, number));
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
