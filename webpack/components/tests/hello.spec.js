import React from 'react';
import Hello from '../Hello';
import renderer from 'react-test-renderer';

test('Hello component renders as expected', () => {
  const component = renderer.create(<Hello />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
