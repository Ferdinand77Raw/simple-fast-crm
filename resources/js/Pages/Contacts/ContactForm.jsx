import React from 'react';
import { useForm } from 'react-hook-form';
import './Contacts.css';


const ContactForm = ({ onSubmit, contactToEdit, onDelete }) => {
    const { register, handleSubmit, setValue, reset } = useForm();

    const submitHandler = (data) => {
        onSubmit(data);
        reset(); // Limpiar el formulario después de enviar
    };

    const deleteHandler = () => {
        onDelete(contactToEdit.id); // Suponiendo que los contactos tienen un ID único
        reset(); // Limpiar el formulario después de eliminar
    };

    // Cuando se recibe un contacto para editar, establecer los valores iniciales del formulario
    React.useEffect(() => {
        if (contactToEdit) {
            Object.keys(contactToEdit).forEach((key) => {
                setValue(key, contactToEdit[key]);
            });
        }
    }, [contactToEdit, setValue]);

    return (
        <div className='contact-form'>
            <form onSubmit={handleSubmit(submitHandler)}>
                <ul className="list-inline">
                    <li className="list-inline-item">
                        <label className="form-label">
                            Name:
                            <input {...register('name')} className="form-control" />
                        </label>
                    </li>
                    <li className="list-inline-item">
                        <label className="form-label">
                            Last name:
                            <input {...register('lastname')} className="form-control" />
                        </label>
                    </li>
                    <li className="list-inline-item">
                        <label className="form-label">
                            Phone number:
                            <input {...register('phone_number')} className="form-control" />
                        </label></li>
                    <li className="list-inline-item">
                        <label className="form-label">
                            City:
                            <input {...register('city')} className="form-control" />
                        </label>
                    </li>
                    <li className="list-inline-item">
                        <label className="form-label">
                            State/Province:
                            <input {...register('state')} className="form-control" />
                        </label>
                    </li>
                    <li className="list-inline-item">
                        <button type="submit" className="btn btn-primary btn-save">
                            Guardar
                        </button>
                    </li>

                    <li className="list-inline-item">
                        {contactToEdit && (
                            <div className="col">
                                <button
                                    type="button"
                                    onClick={deleteHandler}
                                    className="btn btn-danger"
                                >
                                    Eliminar
                                </button>
                            </div>
                        )}
                    </li>
                </ul>
            </form>

        </div>
    );

};

export default ContactForm;
