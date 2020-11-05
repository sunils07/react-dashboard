import React from 'react';
import { string } from 'prop-types';

import "./app-list.scss";

export default function AppListImage({ url }) {

    return (
        <img src={url} alt="test" className="avtar" />
    );
}

AppListImage.propTypes = {
    url: string.isRequired
};