import React from 'react';
import Modal from '@material-ui/core/Modal';

const FormDialog = (props) => {
    return(
        <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={props.showModal}
                    onClose={props.handleClose}
                >
                    <form onSubmit={props.buttonClick}>
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
                            <button type='submit' className='btn btn-secondary'>Editar</button>
                        </span>
                    </form>
                </Modal>
    )
}

export default FormDialog;