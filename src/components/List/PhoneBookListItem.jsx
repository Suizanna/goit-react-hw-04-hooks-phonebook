import PropTypes from 'prop-types';
import s from './PhoneList.module.css';

import { ReactComponent as DeleteIcon } from '../../img/delete.svg';

const PhoneBookListItem = ({ name, number, id, onDeleteContact }) => {
  return (
    <li className={s.item}>
       <p className={s.info}>
            <b>{name}</b>
            <em>{number}</em>
          </p>
      <button className={s.btn_circle}
        type="button"
        onClick={onDeleteContact} id={id}>
           {/* Delete */}
        <DeleteIcon pointerEvents="none" width="26" height="26" />
      </button>
    </li>
  );
};

 PhoneBookListItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default PhoneBookListItem;
