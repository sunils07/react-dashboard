import React from 'react';
import renderer from "react-test-renderer";
import AppCard from "./app-card";

test('renders correctly ', () => {
    const tree = renderer
        .create(
            <AppCard>
                <h1>Just a card</h1>
            </AppCard>
        )
        .toJSON();

    expect(tree).toMatchSnapshot();
});
