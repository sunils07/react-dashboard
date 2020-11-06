import React from 'react';
import renderer from "react-test-renderer";
import { render } from "@testing-library/react";
import Avtar from "../../images/avtar.png";
import Header from "./header";

test('renders header correctly ', () => {
    const tree = renderer
        .create(<Header
            userName="Sunil Dandwate"
            userRole="Soft. Dev."
            avtarUrl={Avtar}
        />)
        .toJSON();

    expect(tree).toMatchSnapshot();
});

test('renders header without avtar correctly ', () => {
    const tree = renderer
        .create(<Header
            userName="Sunil Dandwate"
            userRole="Soft. Dev."
        />)
        .toJSON();

    expect(tree).toMatchSnapshot();
});

test('renders header without avtar correctly ', () => {
    const tree = renderer
        .create(<Header
            userName="Sunil Dandwate"
            userRole="Soft. Dev."
        />)
        .toJSON();

    expect(tree).toMatchSnapshot();
});

test('render the contect correct ', () => {
    const { getByText, getByAltText } = render(<Header
        userName="Sunil Dandwate"
        userRole="Soft. Dev."
        avtarUrl={Avtar}
    />);

    getByText("Sunil Dandwate");
    getByText("Soft. Dev.");
    getByAltText("User");
});

test('render the header without avtar ', () => {
    const { getByText } = render(<Header
        userName="Sunil Dandwate"
        userRole="Soft. Dev."
    />);

    getByText("Sunil Dandwate");
    getByText("Soft. Dev.");
});
