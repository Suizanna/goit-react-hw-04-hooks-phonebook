import PropTypes from 'prop-types';
// import s from './PhoneForm.module.css';
import s from './ContactList.module.css';


const PhoneBookForm = ({ onSetUserInfo, onAddContact, name, number }) => {
  return (
    <form className={s.form} onSubmit={onAddContact} action="">
      <label className={s.label} htmlFor="">{/* htmlFor помогает читалкам и другим вспомогательным инструментам. */}
        <p>Name</p>
        <input
          className={s.input}
          onInput={onSetUserInfo}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          placeholder="Ivan Ivanov"
        />
      </label>
      <label className={s.label} htmlFor="">
        <p>Number</p>
        <input
          className={s.input}
          onInput={onSetUserInfo}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          placeholder="111-11-11"
        />
      </label>
     <button className={s.btn} type="submit">
        Add contact
      </button>
    </form>
  );
};

PhoneBookForm.propTypes = {
  onAddContact: PropTypes.func.isRequired
};

export default PhoneBookForm;
