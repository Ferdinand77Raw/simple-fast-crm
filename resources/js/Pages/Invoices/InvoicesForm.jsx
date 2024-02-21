import React from 'react';
import { useForm } from 'react-hook-form';
import '../../../css/forms.css';


const ProductForm = ({ onSubmit, invoiceToEdit, onDelete }) => {
    const { register, handleSubmit, setValue, reset } = useForm();

    const submitHandler = (data) => {
        onSubmit(data);
        reset(); // Limpiar el formulario después de enviar
    };

    const deleteHandler = () => {
        onDelete(invoiceToEdit.id); // Suponiendo que los contactos tienen un ID único
        reset(); // Limpiar el formulario después de eliminar
    };

    // Cuando se recibe un contacto para editar, establecer los valores iniciales del formulario
    React.useEffect(() => {
        if (invoiceToEdit) {
            Object.keys(invoiceToEdit).forEach((key) => {
                setValue(key, invoiceToEdit[key]);
            });
        }
    }, [invoiceToEdit, setValue]);

    return (
        <div className='new-form'>
            <form onSubmit={handleSubmit(submitHandler)}>
                <ul class="list-inline">
                    <li class="list-inline-item">
                        <label className="form-label">
                            Number:
                            <input {...register('name')} className="form-control" />
                        </label>
                        <label className="form-label">
                            Product Id:
                            <input {...register('product_id')} className="form-control" />
                        </label>
                    </li>
                    <li class="list-inline-item">
                        <button type="submit" className="btn btn-primary btn-save">
                            Save
                        </button>
                    </li>

                    <li class="list-inline-item">
                        {invoiceToEdit && (
                            <div className="col">
                                <button
                                    type="button"
                                    onClick={deleteHandler}
                                    className="btn btn-danger"
                                >
                                    Delete
                                </button>
                            </div>
                        )}
                    </li>
                </ul>
            </form>

        </div>
    );

};

export default ProductForm;