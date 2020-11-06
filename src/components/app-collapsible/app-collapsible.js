import React from 'react';
import { oneOfType, array, object } from "prop-types";
import { Card } from 'reactstrap';

import "./app-collapsible.scss";

export default function AppCollapsible({ children }) {
    return (
        <Card className="app-card collapsible">
            {children}
        </Card>
    );
}

AppCollapsible.propTypes = {
    children: oneOfType([array, object]).isRequired
};