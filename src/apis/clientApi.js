import axios from 'axios';

export default axios.create({
    baseURL:"http://54.147.244.100/api/customers"
    //headers:{"Access-Control-Allow-Origin":"*"}
})