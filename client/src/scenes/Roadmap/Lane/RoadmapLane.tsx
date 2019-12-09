import React, { FC } from 'react';
import { QuarterLane } from '@interfaces';

interface Props {
  lane: QuarterLane;
}

const RoadmapLane: FC<Props> = (props) => (
  <div>{props.lane.name}</div>
);

export default RoadmapLane;
