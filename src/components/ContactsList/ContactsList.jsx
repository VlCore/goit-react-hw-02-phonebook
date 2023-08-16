import { Contact } from "./Contact/Contact";
import PropTypes from 'prop-types';
import { List } from "./ContactsList.styled";

export const ContactsList = ({ contacts = [], removeContact }) => {
    return (
        <List>
            {contacts.length === 0 
                ? <li><h3>Sorry, but the list is empty!</h3></li>
                : contacts.map(contact => <Contact contact={contact} removeContact={removeContact} key={contact.id}/>)}
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
};
