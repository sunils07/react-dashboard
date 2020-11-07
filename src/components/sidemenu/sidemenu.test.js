import React from 'react';
import renderer from "react-test-renderer";
import SideMenu from "./sidemenu";

test('renders sidemenu component correctly ', () => {
    const tree = renderer
        .create(<SideMenu />)
        .toJSON();

    expect(tree).toMatchSnapshot();
});
