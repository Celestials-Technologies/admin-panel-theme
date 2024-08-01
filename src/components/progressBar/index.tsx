import React from 'react';

import ProgressBar from '@ramonak/react-progress-bar';

interface Props {
  completed: number;
}

const ReactProgressBar: React.FC<Props> = ({ completed }) => {
  return <ProgressBar completed={completed} isLabelVisible={false} />;
};

export default ReactProgressBar;
