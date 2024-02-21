import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import LeadForm from './LeadsForm.jsx';
import SidePanel from '@/Components/SidePanel';
import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { FaPen } from "react-icons/fa";
import '../../../css/forms.css';

export default function Leads({ auth }) {
    const [leads, setLeads] = useState([]);
    const [editingLead, setEditingLead] = useState(null);

    const addLead = (newLead) => {
        setLeads([...leads, newLead]);
    };

    const editLead = (editedLead) => {
        setLeads((prevLeads) =>
            prevLeads.map((lead) =>
                lead.id === editedLead.id ? editedLead : lead
            )
        );
        setEditingLead(null);
    };

    const deleteLead = (leadId) => {
        setLeads((prevLeads) =>
            prevLeads.filter((lead) => lead.id !== leadId)
        );
        setEditingLead(null);
    };


    return (
        <AuthenticatedLayout user={auth.user}>
        <SidePanel></SidePanel>
            <div>
                <LeadForm onSubmit={editingLead ? editLead : addLead} leadToEdit={editingLead} onDelete={deleteLead} />
                    <table align='center' className="new-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Last Name</th>
                                <th>Product code</th>
                            </tr>
                        </thead>
                        <tbody>
                            {leads.map((lead) => (
                                <tr key={lead.id}>
                                    <td>{lead.name}</td>
                                    <td>{lead.lastname}</td>
                                    <td>{lead.product_code}</td>
                                    <td>
                                        <button className="btn btn-primary" onClick={() => setEditingLead(lead)}>
                                            <FaPen />
                                        </button>
                                        <button className="btn btn-danger ms-2" onClick={() => deleteLead(lead.id)}>
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