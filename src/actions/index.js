import clientApi from '../apis/clientApi'

export const fetchClients = () => {
    return async (dispatch) => {
        // const response = await Axios.get('http://54.147.244.100/api/customers')
        const response = await clientApi.get('')

        dispatch({
            type: 'FETCH_CLIENTS',
            payload: response.data.data
        })
    }
}

export const fetchClient = (name) => {
    return async (dispatch) => {
        // const response = await Axios.get('http://54.147.244.100/api/customers')
        const response = await clientApi.get('')

        let clientList = []

        response.data.data.map(client => {
            if (client.name.includes(name)) {
                clientList.push(client)
            }
        })

        dispatch({
            type: 'FETCH_CLIENT',
            payload: clientList
        })


    }
}

export const deleteClient = (id) => {
    return async (dispatch) => {
        //await Axios.delete('http://54.147.244.100/api/customers/'+id)
        await clientApi.delete('/' + id)

        dispatch({
            type: 'DELETE_CLIENT'
        })
    }
}

export const addClient = (name, cpf, birthday) => {
    return async (dispatch) => {
        // const response = await Axios.post('http://54.147.244.100/api/customers',
        // {
        //     name:name,
        //     cpf:cpf,
        //     birthday:birthday
        // })

        const response = await clientApi.post('',
            {
                name: name,
                cpf: cpf,
                birthday: birthday
            })

        console.log(response)
        dispatch({
            type: 'ADD_CLIENT',
        })
    }
}

export const editClient = (name, cpf, birthday, id) => {
    return async (dispatch) => {
        // const response = await Axios.put('http://54.147.244.100/api/customers/'+id,
        // {
        //     name:name,
        //     cpf:cpf,
        //     birthday:birthday
        // })

        const response = await clientApi.put('/' + id,
            {
                name: name,
                cpf: cpf,
                birthday: birthday
            })

        console.log(response)
        dispatch({
            type: 'EDIT_CLIENT',
        })
    }
}