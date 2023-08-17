import { Contact } from "./Contact/Contact";
import PropTypes from 'prop-types';
import { List } from "./ContactsList.styled";
import { filterContacts } from './ContactFilter';

export const ContactsList = ({ contacts = [], removeContact, searchTerm }) => {
    const filteredContacts = filterContacts(contacts, searchTerm);

    return (
        <List>
            {filteredContacts.length === 0 
                ? <li><h3>Sorry, but the list is empty!</h3></li>
                : filteredContacts.map(contact => <Contact contact={contact} removeContact={removeContact} key={contact.id}/>)}
        </List>
    );
};

ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            number: PropTypes.string,
            name: PropTypes.string,
            id: PropTypes.string,
        })
    ),
    removeContact: PropTypes.func.isRequired,
    searchTerm: PropTypes.string,
};
