import React, { FC } from 'react';
import { Quarter } from '@interfaces';

export interface Quarter {

}

interface Props {
  quarter: Quarter;
}

const RoadmapQuarter: FC<Props> = (props) => (
  <div>{props.quarter.name}</div>
);

export default RoadmapQuarter;
