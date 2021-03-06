import React from 'react';
import { Progress, ProgressVariant } from '@breakaway/react-core';

class ProgressFailure extends React.Component {
  render() {
    return <Progress value={33} title="Failure due to an error" variant={ProgressVariant.danger} />;
  }
}

export default ProgressFailure;
