import React from 'react';
import { render } from "@testing-library/react";
import StudentList from "./student-list";

const mockList = [
    {
        "id": 1,
        "name": "Annete Watson",
        "marks": 9.3
    },
    {
        "id": 2,
        "name": "Calvin Steward",
        "marks": 8.9
    }
];

test('renders student stat card correctly ', () => {

    const onStudentClick = jest.fn();

    const { getByText } = render(
        <StudentList
            items={mockList}
            onStudentClick={onStudentClick}
        />
    );

    getByText("Annete Watson");
    getByText("9.3");

    getByText("Calvin Steward");
    getByText("8.9");
});