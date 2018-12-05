import React from 'react';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

const FormDialog = (props) => {
    return (
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
                    value={props.name}
                    onChange={props.onNameChange}
                />
                <input
                    placeholder='CPF'
                    className='form-control'
                    value={props.cpf}
                    onChange={props.onCpfChange}
                />
                <input
                    placeholder='Aniversário'
                    className='form-control'
                    value={props.birthday}
                    onChange={props.onBirthdayChange}
                />
                {/* <span className='input-group-btn'>
                    <button type='submit' className='btn btn-secondary'>Editar</button>
                </span> */}
                <Button variant="contained" onClick={props.buttonClick}>
                    Submeter
                 </Button>

            </form>
        </Modal>
    )
}

export default FormDialog;