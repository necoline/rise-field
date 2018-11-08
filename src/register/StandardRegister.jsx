import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    DialogButton
  } from '@rmwc/dialog';
import { Subscribe } from 'unstated';
import { Button, ButtonIcon } from '@rmwc/button'

import StandardContainer from '../containers/StandardContainer';
// import Dialog from '../common/Dialog';
import Students from './Students';
import Header from '../common/Header';


class StandardRegister extends Component {
    state = {
        isDialogOpen: false
    }

    openDialog = () => this.setState({ isDialogOpen: true });

    closeDialog = () => this.setState({ isDialogOpen: false });

    getStandardName = (container) => container.selectors.getStandardData(this.props.match.params.id).standardName

render() {
    console.log('state', this.state.isDialogOpen)
    return (
        <div>
            <Header title=""/>
            <Subscribe to={[StandardContainer]}>{container =>
            <div className="mdc-layout-grid container">
            <div className="mdc-layout-grid__inner">
                <div className="mdc-layout-grid__cell page-header">
                    <span className='page-title'> {this.getStandardName(container)} </span>
                </div>
                <div className="mdc-layout-grid__cell page-header">
                    <Dialog
                        open={this.state.isDialogOpen}
                        onClose={evt => {this.setState({isDialogOpen: false})}}>    
                        <DialogContent>
                            <Button raised tag={Link} to="/student-form">
                                Create Profile
                            </Button>
                            <Button raised tag={Link} to="/main-register">
                                Select From Register
                            </Button>
                        </DialogContent>
                        <DialogActions>
                            <DialogButton action="close">Cancel</DialogButton>
                        </DialogActions>
                    </Dialog>
                    <Button outlined aria-label="add" onClick={evt => this.setState({isDialogOpen: true})}>
                        <ButtonIcon icon="add" />
                        Add Student
                    </Button>
                    
                </div>
                <div className="mdc-layout-grid__cell row">
                <Students standardName={this.getStandardName(container)}/>
                </div>
            </div>
            </div>}
            </Subscribe>
        </div>
        )
    }
}

export default StandardRegister;