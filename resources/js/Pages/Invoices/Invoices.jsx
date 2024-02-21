import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import SidePanel from '@/Components/SidePanel';
import { useState } from 'react';
import InvoiceForm from './InvoicesForm.jsx';
import { FaTrashAlt } from 'react-icons/fa';
import { FaPen } from "react-icons/fa";
import '../../../css/forms.css';

export default function Invoices({ auth }) {
    const [invoices, setInvoices] = useState([]);
    const [editingInvoice, setEditingInvoice] = useState(null);

    const addInvoice = (newInvoice) => {
        setInvoices([...invoices, newInvoice]);
    };

    const editInvoice = (editedInvoice) => {
        setInvoices((prevInvoices) =>
            prevInvoices.map((invoice) =>
                invoice.id === editedInvoice.id ? editedInvoice : invoice
            )
        );
        setEditingInvoice(null);
    };

    const deleteInvoice = (invoiceId) => {
        setInvoices((prevInvoices) =>
            prevInvoices.filter((invoice) => invoice.id !== invoiceId)
        );
        setEditingInvoice(null);
    };
    return (
        <AuthenticatedLayout user={auth.user}>
            <SidePanel />
            <InvoiceForm onSubmit={editingInvoice ? editInvoice : addInvoice} invoiceToEdit={editingInvoice} onDelete={deleteInvoice} />
            <table align='center' className="new-table">
                <thead>
                    <tr>
                        <th>Number</th>
                        <th>Product Id</th>
                    </tr>
                </thead>
                <tbody>
                    {invoices.map((invoice) => (
                        <tr key={invoice.id}>
                            <td>{invoice.name}</td>
                            <td>{invoice.product_id}</td>
                            <td>
                                <button className="btn btn-primary" onClick={() => setEditingInvoice(invoice)}>
                                    <FaPen />
                                </button>
                                <button className="btn btn-danger ms-2" onClick={() => deleteInvoice(invoice.id)}>
                                    <FaTrashAlt />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </AuthenticatedLayout>
    );
};