import { request } from "./request";

export function queryVideoList(success) {

    request(
        {
            url : '/video/list',
            method: 'GET'
        },
        res => success(res),
        err =>{
            console.log(err)
        }
    )
}