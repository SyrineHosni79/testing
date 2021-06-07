import ENDPOINTS from "../enums/enums";
import { getData } from "./httprequest";

const getOrders= () => {
    return getData(ENDPOINTS.ORDERS);
};
export default getOrders