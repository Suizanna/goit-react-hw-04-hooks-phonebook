// import s from './ContactList.module.css';
import s from './PhoneList.module.css';
import PhoneBookListItem from './PhoneBookListItem';

const PhoneBookList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={s.list}>
      {contacts.map(({ name, number, id }) => {
        return (
          <PhoneBookListItem
            onDeleteContact={onDeleteContact}
            key={id}
            name={name}
            number={number}
            id={id}
          />
        );
      })}
    </ul>
  );
};

export default PhoneBookList;

