import React from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit'
import Axios from 'axios';

import { fetchClients } from '../actions/index'

class ClientList extends React.Component {

    componentDidMount() {
        this.props.fetchClients();
    }

    onDeletePressed(key){
        Axios.delete('http://54.147.244.100/api/customers/'+key).then(()=>{
            this.props.fetchClients();
            this.forceUpdate()
        })       
    }

    onEditPressed(key){
        
    }

    render() {
        return this.props.clients.map(client => {
            return (
                //<div className="item" key={client.id}>
                <Card key={client.id}>
                    <CardHeader
                        title={client.name}
                    />
                    <CardContent>
                        <p>CPF: {client.cpf}</p>
                        <p>Aniversário: {client.birthdate}</p>
                    </CardContent>
                    <CardActions>
                        <IconButton aria-label="Edit Info">
                            <EditIcon />
                        </IconButton>
                        <IconButton aria-label="Delete" onClick={() => this.onDeletePressed(client.id)}>
                            <DeleteIcon />
                        </IconButton>
                    </CardActions>
                    {/* <div className="content">
                        <div className="description">
                            <p>CPF: {client.cpf}</p>
                            <p>Aniversário: {client.birthdate}</p>
                        </div>
                    </div> */}
                </Card>
                //</div>
            )
        })

    }
}

const mapStateToProps = (state) => {
    return {
        clients: state.clients
    }
}

export default connect(mapStateToProps, { fetchClients })(ClientList)