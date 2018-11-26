import React from 'react';
import { Progress, ProgressMeasureLocation, ProgressVariant } from '@breakaway/react-core';

class ProgressInsideSuccess extends React.Component {
  render() {
    return (
      <Progress
        value={33}
        title="Success"
        measureLocation={ProgressMeasureLocation.inside}
        variant={ProgressVariant.success}
      />
    );
  }
}

export default ProgressInsideSuccess;
