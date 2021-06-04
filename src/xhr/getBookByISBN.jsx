import ENDPOINTS from "../enums/enums";
import { getData } from "./httprequest";

const getBookByISBN= (isbn) => {
    const params=ENDPOINTS.BOOKS+ "/isbn?"+ isbn;
    return getData(params);
};
export default getBookByISBN