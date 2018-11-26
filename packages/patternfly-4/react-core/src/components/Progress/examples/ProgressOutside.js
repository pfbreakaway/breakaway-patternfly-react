import React from 'react';
import { Progress, ProgressMeasureLocation } from '@breakaway/react-core';

class ProgressOutside extends React.Component {
  render() {
    return <Progress value={33} title="Descriptive text here" measureLocation={ProgressMeasureLocation.outside} />;
  }
}

export default ProgressOutside;
