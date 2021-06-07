import ENDPOINTS from "../enums/enums";
import { getData } from "./httprequest";

const getAllAuthors= () => {
    return getData(ENDPOINTS.AUTHORSDATA);
};
export default getAllAuthors