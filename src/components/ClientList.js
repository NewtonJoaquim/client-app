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
import FormDialog from './FormDialog';

class ClientList extends React.Component {

    constructor() {
        super();
        this.state = {
            showModal: false,
            formName:'',
            formCpf:'',
            formBirthday:''
        };
    }

    componentDidMount() {
        this.props.fetchClients();
    }

    onDeletePressed(key) {
        Axios.delete('http://54.147.244.100/api/customers/' + key).then(() => {
            this.props.fetchClients();
            this.forceUpdate()
        })
    }

    handleCloseModal = () => {
        this.setState({ showModal: false });
    }

    onNameChange = (event) => {
        this.setState({formName:event.target.value})
        console.log(this.state.formName)
    }

    onCpfChange = (event) => {
        this.setState({formCpf:event.target.value})
        console.log(this.state.formCpf)
    }

    onBirthdayChange = (event) => {
        this.setState({formBirthday:event.target.value})
        console.log(this.state.formBirthday)
    }

    onEditPressed(client) {
        this.setState({showModal:true,formName:client.name, formCpf:client.cpf, formBirthday:client.birthdate})
    }

    onFormSubmit(){
        
    }

    render() {
        // return this.props.clients.map(client => {
        //     return (
        //         <div>
        //             <FormDialog
        //                 showModal={this.state.showModal}
        //                 handleClose={this.handleCloseModal}
        //                 buttonClick={this.onFormSubmit}
        //                 name={this.state.formName}
        //                 onNameChange={this.onNameChange}
        //                 cpf={this.state.formCpf}
        //                 onCpfChange={this.onCpfChange}
        //                 birthday={this.state.formBirthday}
        //                 onBirthdayChange={this.onBirthdayChange}
        //             />

        //             <Card key={client.id}>
        //                 <CardHeader
        //                     title={client.name}
        //                 />
        //                 <CardContent>
        //                     <p>CPF: {client.cpf}</p>
        //                     <p>Aniversário: {client.birthdate}</p>
        //                 </CardContent>
        //                 <CardActions>
        //                     <IconButton aria-label="Edit Info" onClick={() => this.onEditPressed(client)}>
        //                         <EditIcon />
        //                     </IconButton>
        //                     <IconButton aria-label="Delete" onClick={() => this.onDeletePressed(client.id)}>
        //                         <DeleteIcon />
        //                     </IconButton>
        //                 </CardActions>
        //             </Card>
        //         </div>
        //     )
        // })
        return(
            <div>
                <FormDialog
                    showModal={this.state.showModal}
                    handleClose={this.handleCloseModal}
                    buttonClick={this.onFormSubmit}
                    name={this.state.formName}
                    onNameChange={this.onNameChange}
                    cpf={this.state.formCpf}
                    onCpfChange={this.onCpfChange}
                    birthday={this.state.formBirthday}
                    onBirthdayChange={this.onBirthdayChange}
                />
                {this.props.clients.map(client => {
                    return(
                        <Card key={client.id}>
                        <CardHeader
                            title={client.name}
                        />
                        <CardContent>
                            <p>CPF: {client.cpf}</p>
                            <p>Aniversário: {client.birthdate}</p>
                        </CardContent>
                        <CardActions>
                            <IconButton aria-label="Edit Info" onClick={() => this.onEditPressed(client)}>
                                <EditIcon />
                            </IconButton>
                            <IconButton aria-label="Delete" onClick={() => this.onDeletePressed(client.id)}>
                                <DeleteIcon />
                            </IconButton>
                        </CardActions>
                    </Card>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        clients: state.clients
    }
}

export default connect(mapStateToProps, { fetchClients })(ClientList)