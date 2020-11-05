import React from 'react';
import { oneOfType, number, string } from 'prop-types';

import "./app-list.scss";

export default function AppListBage({ value }) {

    return (
        <div className="list-badge">{value}</div>
    );
}

AppListBage.propTypes = {
    value: oneOfType([string, number]).isRequired
};