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

export const deleteClient = (id) =>{
    return async (dispatch) =>{
        await Axios.delete('http://54.147.244.100/api/customers/'+id)

            dispatch({
                type:'DELETE_CLIENT'
            })
    }
}

export const addClient = (name, cpf, birthday) =>{
    return async (dispatch) => {
        const response = await Axios.post('http://54.147.244.100/api/customers',
        {
            name:name,
            cpf:cpf,
            birthday:birthday
        })

        console.log(response)
        dispatch({
            type:'ADD_CLIENT',
        })
    }
}

export const editClient = (name,cpf,birthday,id) =>{
    return async (dispatch) =>{
        const response = await Axios.put('http://54.147.244.100/api/customers/'+id,
        {
            name:name,
            cpf:cpf,
            birthday:birthday
        })

        console.log(response)
        dispatch({
            type:'EDIT_CLIENT',
        })
    }
}