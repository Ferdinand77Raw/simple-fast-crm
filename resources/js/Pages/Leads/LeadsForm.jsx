import React from 'react';
import { useForm } from 'react-hook-form';
import '../../../css/forms.css';


const LeadForm = ({ onSubmit, leadToEdit, onDelete }) => {
    const { register, handleSubmit, setValue, reset } = useForm();

    const submitHandler = (data) => {
        onSubmit(data);
        reset(); // Limpiar el formulario después de enviar
    };

    const deleteHandler = () => {
        onDelete(leadToEdit.id); // Suponiendo que los contactos tienen un ID único
        reset(); // Limpiar el formulario después de eliminar
    };

    // Cuando se recibe un contacto para editar, establecer los valores iniciales del formulario
    React.useEffect(() => {
        if (leadToEdit) {
            Object.keys(leadToEdit).forEach((key) => {
                setValue(key, leadToEdit[key]);
            });
        }
    }, [leadToEdit, setValue]);

    return (
        <div className='new-form'>
            <form onSubmit={handleSubmit(submitHandler)}>
                <ul class="list-inline">
                    <li class="list-inline-item">
                        <label className="form-label">
                            Name:
                            <input {...register('name')} className="form-control" />
                        </label>
                    </li>
                    <li class="list-inline-item">
                        <label className="form-label">
                            Last name:
                            <input {...register('lastname')} className="form-control" />
                        </label>
                    </li>
                    <li class="list-inline-item">
                        <label className="form-label">
                            Product code:
                            <input {...register('product_code')} className="form-control" />
                        </label>
                    </li>
                    <li class="list-inline-item">
                        <button type="submit" className="btn btn-primary btn-save">
                            Guardar
                        </button>
                    </li>

                    <li class="list-inline-item">
                        {leadToEdit && (
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

export default LeadForm;
