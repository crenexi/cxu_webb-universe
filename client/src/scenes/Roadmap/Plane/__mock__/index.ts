import { QuarterTask } from '@interfaces';

export const mockTasks = (): QuarterTask[] => {
  const quarters = Array.from({ length: 8 }, (_, i) => ({
    name: `Quarter ${i + 1}`,
    brief: 'This quarter is going to be full of tasks and completing those tasks.',
    status: 'In Progress',
  }));

  const lanes = Array.from({ length: 3 }, (_, i) => ({
    name: `Lane ${i + 1}`,
    brief: 'This is a lane that means something. Seriously it has some meaning hopefully.'
  }));

  return Array.from({ length: 20 }, (_, i) => ({
    name: `Task ${i + 1}`,
    description: 'Do something for some division or office and complete doing the thing.',
    status: 'In Progress',
    lane: i % 2 === 0 ? lanes[0] : lanes[1],
    quarter: i % 3 === 0 ? quarters[0] : quarters[1],
  }));
};
