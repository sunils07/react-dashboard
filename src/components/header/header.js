import React from 'react';
import { oneOfType, any, string } from 'prop-types';
import {
    Navbar,
    Nav,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,

} from 'reactstrap';
import "./header.scss";

export default function Header({ userName, userRole, avtarUrl }) {
    return (
        <>
            <div className="header gutter-2x">
                <Navbar color="light" light expand="md">
                    <Nav className="ml-auto" navbar>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                <div className="user-dropdown">
                                    <div className="user-info">
                                        <div className="user-name">{userName}</div>
                                        <div className="user-role">{userRole}</div>
                                    </div>
                                    {avtarUrl && <img src={avtarUrl} className="avtar" alt="User" />}
                                </div>
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Menu #1
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    Menu #2
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    Menu #3
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Navbar>
            </div>
            <div className="header-height"></div>
        </>
    );
}

Header.propTypes = {
    userName: string.isRequired,
    userRole: string.isRequired,
    avtarUrl: oneOfType([any, string])
};