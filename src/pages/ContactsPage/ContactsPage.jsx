import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import Section from 'components/Section/Section';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import Filter from '../../components/Filter/Filter';

import { filterSlice } from '../../redux/filter/filter-slice';

import {
  fetchContacts,
  addContactItem,
  deleteContactItem,
} from '../../redux/items/items-operations';

import {
  getContactsItems,
  getLoading,
  getError,
} from '../../redux/items/items-selectors';
import { getContactsFilter } from '../../redux/filter/filter-selectors';

function ContactsPage() {
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

    if (nameArr.includes(data.name.toLowerCase())) {
      alert(`${data.name} is already in contacts`);
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
    <>
      <Section title="Книга контактів">
        <ContactForm onSubmit={onAddContactsItem} />
      </Section>
      <Section title="Список контактів">
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
    </>
  );
}

export default ContactsPage;
