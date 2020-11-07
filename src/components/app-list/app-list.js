import React from 'react';
import { oneOfType, object, array, func, any } from 'prop-types';

import "./app-list.scss";

export default function AppList({ label, ListIcon, Badge, listItem, onListClick }) {

    return (
        <div className="app-list-item" onClick={(e) => onListClick(listItem, e)}>
            <div className="list-item-left">
                {ListIcon ? ListIcon : null}
                <label>{label}</label>
            </div>
            {Badge ? Badge : null}
        </div>
    );
}

AppList.propTypes = {
    ListIcon: oneOfType([object, array]).isRequired,
    Badge: oneOfType([object, array]).isRequired,
    onListClick: func.isRequired,
    listItem: any
};