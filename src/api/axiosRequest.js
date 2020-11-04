import axiosInstance from './axiosInstance';

const axiosRequest = async (method,url, object) =>{
        let response;
        if (method === "GET")
        {
            response = await axiosInstance.get(url);
        }
        else  if (method === "POST")
        {
            response = await axiosInstance.post(url, object);
        }
        else if (method==="DELETE")
        {
            response = await axiosInstance.delete(url, { data: { object } });
        }
        else if (method==="PUT")
        {
            response = await axiosInstance.put(url, object);
        }
        return response;
    }
export default axiosRequest;