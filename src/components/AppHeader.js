import React from 'react';
import { connect } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add'

class AppHeader extends React.Component{
    render(){
        return(
            <div className="container">
                <IconButton>
                    <AddIcon/>
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