import React, { Component } from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    DialogButton
  } from '@rmwc/dialog';
import { Subscribe } from 'unstated';
import { Button, ButtonIcon } from '@rmwc/button';

import DialogMenu from '../common/DialogMenu';
import Header from '../common/Header';
import StandardContainer from '../containers/StandardContainer';
import Students from './Students';

class StandardRegister extends Component {
    state = {
        isDialogOpen: false,
        menuContent: [
            { id: "1", text: "New Student", link: "/student-form"},
            { id: "2", text: "Existing Student", link: "/main-register"}
        ]
    }

    closeDialog = () => this.setState({ isDialogOpen: false });

    openDialog = () => this.setState({ isDialogOpen: true });

    getStandardName = (container) => container.selectors.getStandardData(this.props.match.params.id).standardName

render() {
    console.log('state', this.state.isDialogOpen)
    return (
        <div>
            <Header />
            <Subscribe to={[StandardContainer]}>{container =>
            <div className="mdc-layout-grid container">
            <div className="mdc-layout-grid__inner">
                <div className="mdc-layout-grid__cell page-header">
                    <span className='page-title'> {this.getStandardName(container)} </span>
                </div>
                <div className="mdc-layout-grid__cell page-header">
                    <Dialog
                        open={this.state.isDialogOpen}
                        onClose={() => this.closeDialog()}>    
                        <DialogMenu menuContent={this.state.menuContent}/>
                    </Dialog>
                    <Button outlined aria-label="add" onClick={() => this.openDialog()}>
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