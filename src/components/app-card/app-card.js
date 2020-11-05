import React from 'react';
import {
    Card,
    CardBody
} from 'reactstrap';

import "./app-card.scss";

export default function AppCard({ children }) {

    return (
        <Card className="app-card">
            <CardBody>
                {children}
            </CardBody>
        </Card>
    );
}

AppCard.propTypes = {};