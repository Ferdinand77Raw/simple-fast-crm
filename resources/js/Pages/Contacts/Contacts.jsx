import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import ContactForm from './ContactForm';
import { useState } from 'react';
import SidePanel from '@/Components/SidePanel';
import { FaTrashAlt } from 'react-icons/fa';
import { FaPen } from "react-icons/fa";
import './../../../css/forms.css';

export default function Contacts({ auth, contacts }) {
    const [editingContact, setEditingContact] = useState(null);

    const addContact = (newContact) => {
        setContacts([...contacts, newContact]);
    };

    const editContact = (editedContact) => {
        setContacts((prevContacts) =>
            prevContacts.map((contact) =>
                contact.id === editedContact.id ? editedContact : contact
            )
        );
        patch(route('contacts.update', contacts.id), { onSuccess: () => setEditingContact(false) });
        setEditingContact(null);
    };

    const deleteContact = (contactId) => {
        setContacts((prevContacts) =>
            prevContacts.filter((contact) => contact.id !== contactId)
        );
        setEditingContact(null);
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <SidePanel></SidePanel>
            <div className="contacts-container">
                <button className="add-element">
                    <a href={route('contacts.create')}>Add contact</a>
                </button>
                <table align='center'className='new-table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Last Name</th>
                            <th>Phone Number</th>
                            <th>City</th>
                            <th>State/Province</th>
                            <th>Created at</th>
                            <th>Updated at</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.map((contact) => (
                            <tr key={contact.id}>
                                <td>{contact.name}</td>
                                <td>{contact.lastname}</td>
                                <td>{contact.phone_number}</td>
                                <td>{contact.city}</td>
                                <td>{contact.state}</td>
                                <td>{contact.created_at}</td>
                                <td>{contact.updated_at}</td>

                                <td>
                                    <button className="btn btn-primary" onClick={() => setEditingContact(contact)}>
                                        <FaPen />
                                    </button>
                                    <button className="btn btn-danger ms-2" onClick={() => deleteContact(contact.id)}>
                                        <FaTrashAlt />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AuthenticatedLayout>
    );
};
