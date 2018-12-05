import React from 'react';
import { connect } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add'
//import Modal from '@material-ui/core/Modal';
//import Axios from 'axios'

import {addClient} from '../actions/index'
import FormDialog from './FormDialog';

class AppHeader extends React.Component {
    constructor() {
        super();
        this.state = {
            showModal: false,
            formName:'',
            formCpf:'',
            formBirthday:''
        };
    }

    handleOpenModal = () => {
        this.setState({ showModal: true });
    }

    handleCloseModal = () => {
        this.setState({ showModal: false });
    }

    onFormSubmit = () => {
        console.log(this.state.formName)
        console.log(this.state.formCpf)
        console.log(this.state.formBirthday)

        this.props.addClient(this.state.formName, this.state.formCpf, this.state.formBirthday)
        // Axios.post('http://54.147.244.100/api/customers',
        // {
        //     name:this.state.name,
        //     cpf:this.state.cpf,
        //     birthday:this.state.birthday
        // }).then(response => { 
        //     console.log(response)
        // })
        // .catch(error => {
        //     console.log(error.response)
        // });
        this.setState({showModal:false})
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

    render() {
        return (
            <div className="container">
                
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
                <IconButton onClick={this.handleOpenModal}>
                    <AddIcon />
                </IconButton>
                <form className='input-group' onSubmit={this.onFormSubmit}>
                    <input
                        placeholder='Buscar Usuário pelo Nome'
                        className='form-control'
                    // value={this.state.term}
                    // onChange={this.onInputChange}
                    />
                    <span className='input-group-btn'>
                        <button type='submit' className='btn btn-secondary'>Buscar</button>
                    </span>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        clients: state.clients
    }
}

export default connect(mapStateToProps,{addClient})(AppHeader)