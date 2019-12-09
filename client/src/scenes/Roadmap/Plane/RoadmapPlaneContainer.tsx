import React, { FC, useState, useEffect } from 'react';
import { Quarter, QuarterLane, QuarterTask } from '@interfaces';
import RoadmapQuarter from '../Quarter';

const buildQuarters = (tasks: any[]): Quarter[] => {
  const quarters: Quarter[] = [];
  const lanes: QuarterLane[] = [];

  const quarterExists = (name: string) => quarters.some(v => name === v.name);
  const findLane = (name: string) => lanes.find(v => name === v.name);

  const cleanQuarter = (quarter: any): Quarter => {
    return quarter;
  };

  const cleanLane = (lane: any): QuarterLane => {
    return lane;
  };

  const cleanTask = (task: any): QuarterTask => {
    return task;
  };

  // Determine all available quarters and lanes
  for (let { quarter, lane } of tasks) {
    quarterExists(quarter.name) || quarters.push(cleanQuarter(quarter));

    const laneMatch = findLane(lane.name);
  }

  // Build the quarters
  const withTasks = (lane: QuarterLane) => ({
    ...lane,
    tasks: tasks.filter((task: QuarterTask) => {
      return lane.name === task.lane.name;
    }),
  });

  const withLanes = (quarter: Quarter) => ({
    ...quarter,
    lanes: lanes.map(withTasks),
  });

  return quarters.map(withLanes);
};













const RoadmapPlaneContainer: FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [quarters, setQuarters] = useState([]);

  // Restructure data into quarters
  const intoQuarters = (quarters: Quarter, task: any) => {
    const { quarter, lane } = task;

    if (!quarter || !lane) {
      throw new Error(`Task "${task.name}" requires quarter and lane`);
    }




    return quarters;
  };

  useEffect(() => {
    setQuarters(mockTasks().reduce(intoQuarters, []));
    setIsLoading(false);
  }, []);

  return (
    <div>
      {quarters.map(quarter => (
        <RoadmapQuarter />
      )}
    </div>
  );
};
