import React, { FC } from 'react';

export interface Task {
  name: string;
  description: string;
  // faKey: string;
  status: string;
}

interface Props {
  task: Task;
}

const RoadmapTask: FC<Props> = (props) => (
  <div>{props.task.name}</div>
);

export default RoadmapTask;
