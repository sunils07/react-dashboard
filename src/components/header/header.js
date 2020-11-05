import React from 'react';
import {
    Navbar,
    Nav,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,

} from 'reactstrap';
import Avtar from '../../images/avtar.png';
import "./header.scss";

export default function Header(props) {

    return (
        <>
            <div className="header gutter-2x">
                <Navbar color="light" light expand="md">
                    <Nav className="ml-auto" navbar>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                <div className="user-dropdown">
                                    <div className="user-info">
                                        <div className="user-name">Sunil Dandwate</div>
                                        <div className="user-role">Soft. Dev</div>
                                    </div>
                                    <img src={Avtar} className="avtar" alt="User" />
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

Header.propTypes = {};