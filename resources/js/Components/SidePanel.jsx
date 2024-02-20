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
                    <NavLink href="#">Leads</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">Products</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">Invoices</NavLink>
                </NavItem>
            </Nav>
        </aside>
    );
};

export default SidePanel;