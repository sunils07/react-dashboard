import React from 'react';
import { render } from "@testing-library/react";
import Avtar from "../../images/avtar.png";
import StudentStatCard from "./student-stat-card";

const mockList = [
    {
        "id": 1,
        "title": "Students",
        "type": "profiles",
        "line1": 62,
        "profilUrl": Avtar
    },
    {
        "id": 2,
        "title": "Average Markes",
        "type": "calculation",
        "line1": 6.8,
        "profilUrl": Avtar
    }
];

test('renders student stat card correctly ', () => {
    const { getByText } = render(
        <StudentStatCard items={mockList} />
    );

    getByText("Students");
    getByText("62");

    getByText("Average Markes");
    getByText("6.8");
});