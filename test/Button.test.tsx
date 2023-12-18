import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react-native';
import Button from '../components/Button';

test('Button renders correctly', () => {
  const tree = renderer.create(<Button title="Press me" onPress={() => {}} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Button click event works', () => {
  const onPressMock = jest.fn();
  const { getByText } = render(<Button title="Press me" onPress={onPressMock} />);
  const buttonElement = getByText('Press me');
  fireEvent.press(buttonElement);
  expect(onPressMock).toHaveBeenCalledTimes(1);
});
