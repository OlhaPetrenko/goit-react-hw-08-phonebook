import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import Section from './Section/Section';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

import s from './App.module.css';

function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) || '';
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    console.log('useEffect');

    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  function addContacts(name, number) {
    const nameArr = contacts.map(contact => contact.name);

    if (nameArr.includes(name)) {
      alert(`${name} is already in contacts`);
      return;
    }

    const nameId = nanoid();
    const contact = {
      id: nameId,
      name,
      number,
    };

    setContacts(prevState => [...prevState, contact]);
  }

  function getfilterContacts() {
    const normFilter = filter.toLowerCase();
    const filterContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normFilter)
    );
    return filterContacts;
  }

  function deleteContact(contactId) {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  }

  const filterContacts = getfilterContacts();

  return (
    <div className={s.set}>
      <Section title="Phonebook">
        <ContactForm onSubmit={addContacts} />
      </Section>
      <Section title="Contacts">
        <Filter
          value={filter}
          onChange={event => setFilter(event.currentTarget.value)}
        />
        <ContactList
          contacts={filterContacts}
          onDeleteContact={deleteContact}
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
// class App extends Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   };

//   componentDidMount() {
//     const contacts = JSON.parse(localStorage.getItem('contacts'));
//     if (contacts) {
//       this.setState({ contacts });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   addContacts = (name, number) => {
//     const nameArr = this.state.contacts.map(contact => contact.name);

//     if (nameArr.includes(name)) {
//       alert(`${name} is already in contacts`);
//       return;
//     }

//     const nameId = nanoid();
//     const contact = {
//       id: nameId,
//       name,
//       number,
//     };

//     this.setState(prevState => ({
//       contacts: [contact, ...prevState.contacts],
//     }));
//   };
//   changeFilter = event => {
//     this.setState({
//       filter: event.currentTarget.value,
//     });
//   };
//   getfilterContacts = () => {
//     const normFilter = this.state.filter.toLowerCase();
//     const filterContacts = this.state.contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normFilter)
//     );
//     return filterContacts;
//   };
//   deleteContact = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//     }));
//   };

//   render() {
//     const { filter } = this.state;
//     const filterContacts = this.getfilterContacts();

//     return (
//       <div className={s.set}>
//         <Section title="Phonebook">
//           <ContactForm onSubmit={this.addContacts} />
//         </Section>
//         <Section title="Contacts">
//           <Filter value={filter} onChange={this.changeFilter} />
//           <ContactList
//             contacts={filterContacts}
//             onDeleteContact={this.deleteContact}
//           />
//         </Section>
//       </div>
//     );
//   }
// }

// export default App;
