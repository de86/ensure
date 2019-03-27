import * as React from 'react';
import * as ReactTestRenderer from 'react-test-renderer';

import Hello from './';


test('It should match the Hello snapshot', () => {
    const helloComponent = ReactTestRenderer.create(<Hello compiler="Test" framework="test" />).toJSON();
    expect(helloComponent).toMatchSnapshot('Hello');
});
