import React from 'react';
import renderer from "react-test-renderer";
import AppListBage from "./app-list-badge";

test('renders app list badge correctly ', () => {
    const tree = renderer
        .create(<AppListBage value="567567" />)
        .toJSON();

    expect(tree).toMatchSnapshot();
});
