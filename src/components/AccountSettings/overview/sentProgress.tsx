import React from 'react';
import ReactProgressBar from '@/components/progressBar';
import { _capitalize } from 'chart.js/helpers';

interface Props {
  title: string;
  total: number;
  completed: number;
}
const SentProgress: React.FC<Props> = ({ title, total, completed }) => {
  return (
    <div>
      <h2>{_capitalize(title)}</h2>
      <ReactProgressBar completed={(completed / total) * 100} />
      <div>{`${completed} out of ${total} ${title} left in this cycle`}</div>
    </div>
  );
};

export default SentProgress;
