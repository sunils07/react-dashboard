import React from 'react';
import renderer from "react-test-renderer";
import Avtar from "../../images/avtar.png";
import AppListImage from "./app-list-image";

test('renders app list image correctly ', () => {
    const tree = renderer
        .create(<AppListImage url={Avtar} />)
        .toJSON();

    expect(tree).toMatchSnapshot();
});
