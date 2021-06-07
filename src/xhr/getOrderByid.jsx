import ENDPOINTS from "../enums/enums";
import { getData } from "./httprequest";

const getOrderById= () => {
    return getData(ENDPOINTS.ORDERID);
};
export default getOrderById