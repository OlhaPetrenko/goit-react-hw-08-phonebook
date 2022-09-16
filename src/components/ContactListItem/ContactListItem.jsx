import PropTypes from 'prop-types';

import s from './ContactListItem.module.css';
function ContactListItem({ name, number, id, onDeleteContact }) {
  return (
    <li className={s.item}>
      <p>
        {name}: {number}
      </p>
      <button
        className={s.btn}
        type="button"
        onClick={() => onDeleteContact(id)}
      >
        Видалити
      </button>
    </li>
  );
}
ContactListItem.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactListItem;
