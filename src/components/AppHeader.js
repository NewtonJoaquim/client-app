import React from 'react';
import { connect } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add'
import Modal from '@material-ui/core/Modal';

class AppHeader extends React.Component {
    constructor() {
        super();
        this.state = {
            showModal: false
        };
    }

    handleOpenModal = () => {
        this.setState({ showModal: true });
    }

    handleCloseModal = () => {
        this.setState({ showModal: false });
    }

    render() {
        return (
            <div className="container">
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.showModal}
                    onClose={this.handleCloseModal}
                >
                    <form onSubmit={this.AddUser}>
                        <input
                            placeholder='Nome do Usuário'
                            className='form-control'
                        // value={this.state.term}
                        // onChange={this.onInputChange}
                        />
                        <input
                            placeholder='CPF'
                            className='form-control'
                        // value={this.state.term}
                        // onChange={this.onInputChange}
                        />
                        <input
                            placeholder='Aniversário'
                            className='form-control'
                        // value={this.state.term}
                        // onChange={this.onInputChange}
                        />
                        <span className='input-group-btn'>
                            <button type='submit' className='btn btn-secondary'>Adicionar</button>
                        </span>
                    </form>
                </Modal>

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

export default connect()(AppHeader)