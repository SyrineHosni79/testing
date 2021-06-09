import ENDPOINTS from "../enums/enums";
import { getData } from "./httprequest";

const getAuthorById= (id) => {
    const params=ENDPOINTS.AUTHORDATA+  id;
    return getData(params);
};
export default getAuthorById