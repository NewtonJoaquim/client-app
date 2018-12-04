import Axios from "axios";

export const fetchClients = () =>{
    return async (dispatch) => {
        const response = await Axios.get('http://54.147.244.100/api/customers')

        dispatch({
            type:'FETCH_CLIENTS',
            payload: response.data.data
        })
    }
}