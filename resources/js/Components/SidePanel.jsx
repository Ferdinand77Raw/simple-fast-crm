import Nav from 'react-bootstrap/Nav';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from './NavLink.jsx';
import '../../css/SidePanel.css';

const SidePanel = () => {
    return (
        <aside>
            <Nav vertical="true">
                <NavItem>
                    <NavLink href={route('contacts.index')} active={route().current('contacts.index')}>Contacts</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href={route('leads.index')} active={route().current('leads.index')}>Leads</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href={route('products.index')} active={route().current('products.index')}>Products</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href={route('invoices.index')} active={route().current('invoices.index')}>Invoices</NavLink>
                </NavItem>
            </Nav>
        </aside>
    );
};

export default SidePanel;