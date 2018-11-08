import React, { Component } from 'react';
// import { Link } from "react-router-dom";
import { SimpleDialog } from '@rmwc/dialog'; 
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
                    {/* <Link to="/student-form"> */}
                    {/* </Link> */}
                    {/* <Dialog /> */}
                    <SimpleDialog
                        title="This is a simple dialog"
                        body="You can pass the body prop, or anything you want as children."
                        open={this.state.isDialogOpen}
                        onClose={evt => {
                            console.log(evt.detail.action)
                            this.setState({isDialogOpen: false})
                        }}
                        />

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