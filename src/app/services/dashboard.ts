import type ApiResponseType from '../types/ApiResponseType';
import http from './index';

const DashboardAPI = {
  getDashBoardData: async () => {
    return http.get<ApiResponseType>('/APIs/data.json').then((res) => res.data);
  },
  grabEmailData: async () => {
    return http.get<ApiResponseType>('/APIs/email.json').then((res) => res.data);
  },
};
export default DashboardAPI;
