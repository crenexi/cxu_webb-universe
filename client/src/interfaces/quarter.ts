export interface QuarterTask {
  name: string;
  description: string;
  // faKey: string;
  status: string;
}

export interface QuarterLane {
  name: string;
  brief: string;
  tasks: QuarterTask[];
}

export interface Quarter {
  name: string;
  brief: string;
  status: string;
  lanes: QuarterLane[];
}
