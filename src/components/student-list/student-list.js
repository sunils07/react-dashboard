import React from 'react';
import { arrayOf, shape, number, string } from 'prop-types';

import Avtar from '../../images/avtar.png';
import AppList from "../app-list/app-list";
import AppListImage from "../app-list/app-list-image";
import AppListBage from "../app-list/app-list-badge";

export default function StudentList({ items }) {
    return items.map((item) => {
        return (
            <AppList
                key={item.id}
                ListIcon={<AppListImage url={Avtar} />}
                Badge={<AppListBage value={item.marks} />}
                label={item.name} />
        );
    });
}

StudentList.propTypes = {
    items: arrayOf(shape({
        id: number.isRequired,
        marks: number.isRequired,
        name: string.isRequired
    })),
};