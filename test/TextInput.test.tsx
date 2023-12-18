import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import TextInput from '../components/TextInput';


test('TextInput renders correctly', () => {
  const { getByDisplayValue } = render(<TextInput onChange={function (newText: string): void {
      throw new Error('Function not implemented.');
  } } />);
  const textInput = getByDisplayValue('');
  expect(textInput).toBeDefined();
});

test('TextInput onChange event works', async () => {
  const onChangeMock = jest.fn();
  const { getByDisplayValue } = render(<TextInput onChange={onChangeMock} />);
  const textInput = getByDisplayValue('');

  fireEvent.changeText(textInput, 'Hello');

  await waitFor(() => {
    expect(onChangeMock).toHaveBeenCalledWith('Hello');
  });
});
