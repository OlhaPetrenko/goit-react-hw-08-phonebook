import ContactListItem from '../ContactListItem/ContactListItem';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';

function ContactList({ contacts, onDeleteContact }) {
  const contactItem = contacts.map(({ name, phone, id }) => (
    <ContactListItem
      key={id}
      id={id}
      name={name}
      number={phone}
      onDeleteContact={onDeleteContact}
    />
  ));
  return <ul className={s.list}>{contactItem}</ul>;
}

ContactList.defaultProps = {
  contacts: [],
};

ContactList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string,
    })
  ),
};

export default ContactList;
