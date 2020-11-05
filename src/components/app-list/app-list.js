import React from 'react';
import { object } from 'prop-types';

import "./app-list.scss";

export default function AppList({ label, ListIcon, Badge }) {

    return (
        <div className="app-list-item">
            <div className="list-item-left">
                {ListIcon ? ListIcon : null}
                <label>{label}</label>
            </div>
            {Badge ? Badge : null}
        </div>
    );
}

AppList.propTypes = {
    ListIcon: object,
    Badge: object
};