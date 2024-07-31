import type ApiResponseType from '../types/ApiResponseType';
import http from './index';

const accountSettingsAPI = {
  getCurrentUsage: async () => {
    return http
      .get<ApiResponseType>('/APIs/currentUsage.json')
      .then((res) => res.data);
  },
};
export default accountSettingsAPI;
