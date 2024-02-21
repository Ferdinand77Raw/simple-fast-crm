import React from 'react';
import { useForm } from 'react-hook-form';
import '../../../css/forms.css';


const InvoiceForm = ({ onSubmit, productToEdit, onDelete }) => {
    const { register, handleSubmit, setValue, reset } = useForm();

    const submitHandler = (data) => {
        onSubmit(data);
        reset(); // Limpiar el formulario después de enviar
    };

    const deleteHandler = () => {
        onDelete(productToEdit.id); // Suponiendo que los contactos tienen un ID único
        reset(); // Limpiar el formulario después de eliminar
    };

    // Cuando se recibe un contacto para editar, establecer los valores iniciales del formulario
    React.useEffect(() => {
        if (productToEdit) {
            Object.keys(productToEdit).forEach((key) => {
                setValue(key, productToEdit[key]);
            });
        }
    }, [productToEdit, setValue]);

    return (
        <div className='new-form'>
            <form onSubmit={handleSubmit(submitHandler)}>
                <ul class="list-inline">
                    <li class="list-inline-item">
                        <label className="form-label">
                            Product Name:
                            <input {...register('product_name')} className="form-control" />
                        </label>
                        <label className="form-label">
                            Code:
                            <input {...register('code')} className="form-control" />
                        </label>
                    </li>
                    <li class="list-inline-item">
                        <button type="submit" className="btn btn-primary btn-save">
                            Save
                        </button>
                    </li>

                    <li class="list-inline-item">
                        {productToEdit && (
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

export default InvoiceForm;