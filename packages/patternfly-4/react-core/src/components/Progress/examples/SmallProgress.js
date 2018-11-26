import React from 'react';
import { Progress, ProgressSize } from '@breakaway/react-core';

class SmallProgress extends React.Component {
  render() {
    return <Progress value={33} title="Descriptive text here" size={ProgressSize.sm} />;
  }
}

export default SmallProgress;
