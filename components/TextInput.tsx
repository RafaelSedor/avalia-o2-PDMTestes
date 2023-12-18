import React, { useState } from 'react';
import { TextInput as RNTextInput } from 'react-native';

interface TextInputProps {
  onChange: (newText: string) => void;
}

const TextInput: React.FC<TextInputProps> = ({ onChange }) => {
  const [text, setText] = useState('');

  const handleChange = (newText: string) => {
    setText(newText);
    onChange(newText);
  };

  return <RNTextInput value={text} onChangeText={handleChange} />;
};

export default TextInput;
