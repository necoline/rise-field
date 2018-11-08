// import {
//     Dialog,
//     DialogTitle,
//     DialogContent,
//     DialogActions,
//     DialogButton
//   } from '@rmwc/dialog';
import React from 'react';
import { SimpleDialog } from '@rmwc/dialog'; 
import PropTypes from 'prop-types';


import { Button } from '@rmwc/button';
import { Link } from "react-router-dom";


  const Dialog  = (props) => (
    <SimpleDialog
    title="This is a simple dialog"
    body="You can pass the body prop, or anything you want as children."
    open={props.isDialogOpen}
    onClose={evt => {
        console.log(evt.detail.action)
        props.closeDialog()
    }}
    />
  );

  Dialog.propTypes = {
    isDialogOpen: PropTypes.function,
    closeDialog: PropTypes.function
};

Dialog.defaultProps = {
    isDialogOpen: () => {},
    closeDialog: () => {},
  };


export default Dialog;


  
    // <SimpleDialog
    //     title="This is a simple dialog"
    //     body="You can pass the body prop, or anything you want as children."
    //     open={this.state.isDialogOpen}
    //     onClose={evt => {
    //         console.log(evt.detail.action)
    //         this.setState({isDialogOpen: false})
    //     }}
    //     />
