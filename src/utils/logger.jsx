import { DEV_MODE } from "../config/config";

//export default class logger extends Component {
const  log= (...arrayOfArguments)=>{

        if (DEV_MODE) {
        console.log(...arrayOfArguments);
        }
    };export default log;

    
//}

