// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ApiResponseType<ResponseData = any> = {
    data: ResponseData;
    type: 'success' | 'error';
    status: number;
  };
  
  export default ApiResponseType;
  