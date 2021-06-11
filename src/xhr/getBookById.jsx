import ENDPOINTS from "../enums/enums";
import { getData } from "./httprequest";

const getBookById= (isbn) => {
    const params=ENDPOINTS.BOOKDATA+  isbn;
    return getData(params);
};
export default getBookById