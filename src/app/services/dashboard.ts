import type ApiResponseType from '../types/ApiResponseType';
import http from './index';

const DashboardAPI = {
  getworkFlowData: async () => {
    return http
      .get<ApiResponseType>('/data.json', )
      .then((res) => res.data);
  },
};
export default DashboardAPI;
