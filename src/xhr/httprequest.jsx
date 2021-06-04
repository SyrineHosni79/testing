import axios from "axios";
import { API_URL_STATIC } from "../config/config";

export const getData= (url) => {
    const URL=API_URL_STATIC + url;
    console.log("URL",URL);
    return axios.get(URL);
    
};
