import axios from "axios";
import {API_URL} from "../consts/Consts";


const $api = axios.create({
    withCredentials:true,
    baseURL: API_URL
})

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
axios.defaults.headers.get['Accepts'] = 'application/json'
axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8'

export default $api;
