import ENDPOINTS from "../enums/enums";
import { getData } from "./httprequest";

const getBooks= () => {
    return getData(ENDPOINTS.BOOKSDATA);
};
export default getBooks