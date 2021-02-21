import axios from "axios";
import store from "../store"

export function request(config,success,error) {

    const axiosRst = axios.create(
        {
            baseURL:store.state.host,
            timeout:'30000',
            headers:{'Access-Control-Allow-Origin':'*'},
        }
    )

    axiosRst(config).then(
        res =>{
            success(res)
        }
    ).catch(
        err =>error(err)
    )
}