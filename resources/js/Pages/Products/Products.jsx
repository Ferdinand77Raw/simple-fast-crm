import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import SidePanel from '@/Components/SidePanel';
import ProductForm from './ProductsForm.jsx';
import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { FaPen } from "react-icons/fa";
import '../../../css/forms.css';

export default function Products({ auth }) {
    const [products, setProducts] = useState([]);
    const [editingProduct, setEditingProduct] = useState(null);

    const addProduct = (newProduct) => {
        setProducts([...products, newProduct]);
    };

    const editProduct = (editedProduct) => {
        setProducts((prevProducts) =>
            prevProducts.map((product) =>
                product.id === editedProduct.id ? editedProduct : product
            )
        );
        setEditingProduct(null);
    };

    const deleteProduct = (productId) => {
        setProducts((prevProducts) =>
            prevProducts.filter((product) => product.id !== productId)
        );
        setEditingProduct(null);
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <div>
                <SidePanel />
                <ProductForm onSubmit={editingProduct ? editProduct : addProduct} productToEdit={editingProduct} onDelete={deleteProduct} />              
                    <table align='center' className="new-table">
                        <thead>
                            <tr>
                                <th>Product name</th>
                                <th>Code</th>
                                <th>Lead Code</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product) => (
                                <tr key={product.id}>
                                    <td>{product.product_name}</td>
                                    <td>{product.code}</td>
                                    <td>{product.lead_code}</td>
                                    <td>
                                        <button className="btn btn-primary" onClick={() => setEditingProduct(product)}>
                                            <FaPen />
                                        </button>
                                        <button className="btn btn-danger ms-2" onClick={() => deleteProduct(product.id)}>
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