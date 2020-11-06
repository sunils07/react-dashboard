import React from 'react';
import { arrayOf, shape, number, string, any } from 'prop-types';
import { Col } from 'reactstrap';
import AppCard from "../app-card/app-card";
import Avtar from '../../images/avtar.png';

export default function StudentStatCard({ items }) {
    return items.map((item) => {
        return (
            <Col md="4" key={item.line1}>
                <AppCard>
                    <img src={item.profilUrl || Avtar} className="avtar" alt="user" />
                    <div className="stat-card-info">
                        <div className="title">{item.line1}</div>
                        <label className="subtitle">{item.title}</label>
                    </div>
                </AppCard>
            </Col>
        );
    });
}

StudentStatCard.propTypes = {
    items: arrayOf(shape({
        line1: number.isRequired,
        title: string.isRequired,
        profilUrl: any
    })).isRequired,
};