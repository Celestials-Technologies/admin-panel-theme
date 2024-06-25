export interface ITabs {
  name: string;
  id: number;
  svg: React.ReactNode;
}

export interface IAnalyticsPerformance {
  name: string;
  revenue: number;
}

export interface IAnalyticsRevenue {
  return: number;
  total: number;
  ryzeo: number;
  workFlow: number;
  campaign: number;
  spent: number;
}

export interface IAnalyticsOrders {
  total: number;
  workFlow: number;
  campaign: number;
}

