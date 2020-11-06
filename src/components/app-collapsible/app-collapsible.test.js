import React from 'react';
import renderer from "react-test-renderer";
import AppCollapsible from "./app-collapsible";

test('renders app collapsible correctly ', () => {
    const tree = renderer
        .create(
            <AppCollapsible>
                <h1>App Collapsible</h1>
            </AppCollapsible>
        )
        .toJSON();

    expect(tree).toMatchSnapshot();
});
