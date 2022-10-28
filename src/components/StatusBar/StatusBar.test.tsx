import React from 'react';
import renderer from 'react-test-renderer';

import StatusBar from './StatusBar';

test('StatusBar color test', () => {
  const statusBar = renderer.create(<StatusBar />).toJSON();

  expect(statusBar).toMatchSnapshot();
});
