import React from 'react';
import { Card } from 'reactstrap';

import "./app-collapsible.scss";

export default function AppCollapsible({ children }) {
    return (
        <Card className="app-card collapsible">
            {children}
        </Card>
    );
}

AppCollapsible.propTypes = {};