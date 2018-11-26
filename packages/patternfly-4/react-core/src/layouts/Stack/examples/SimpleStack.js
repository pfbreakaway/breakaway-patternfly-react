import React from 'react';
import { Stack, StackItem } from '@breakaway/react-core';

class SimpleStack extends React.Component {
  render() {
    return (
      <Stack>
        <StackItem>Secondary content</StackItem>
        <StackItem isMain>Primary Content</StackItem>
        <StackItem>Secondary content</StackItem>
      </Stack>
    );
  }
}

export default SimpleStack;
