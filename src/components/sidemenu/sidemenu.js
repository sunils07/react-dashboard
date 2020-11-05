import React from 'react';
import { Col } from 'reactstrap';

import "./sidemenu.scss";

export default function SideMenu(props) {

    return (
        <Col md="1" className="no-gutter fixed side-menu">
            <div className="side-menu-user flex flex-full-center">
                <span>S</span>
            </div>
        </Col>
    );
}

SideMenu.propTypes = {};