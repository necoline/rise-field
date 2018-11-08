import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    DialogButton
  } from '@rmwc/dialog'; 
import { Button } from '@rmwc/button';
import { Link } from "react-router-dom";


//   const Dialog  = (props) => (
  
//     <Dialog
//         open={this.props.IsDialogOpen}
//         onClose={evt => {
//         console.log(evt.detail.action)
//         this.props.closeDialog
//         }}>

//         <DialogTitle>Dialog Title</DialogTitle>
//         <DialogContent>This is a standard dialog.</DialogContent>
//         <DialogActions>
//         <DialogButton action="close">Cancel</DialogButton>
//         <DialogButton action="accept" isDefaultAction>Sweet!</DialogButton>
//         </DialogActions>
//     </Dialog>
    
//     <Button raised onClick={evt => this.setState({standardDialogOpen: true})}
//     >
//         Open standard Dialog
//     </Button>
//   );

//   Dialog.propTypes = {
//     value: PropTypes.string.isRequired,
//     id: PropTypes.string.isRequired,
//     label: PropTypes.string.isRequired
// };


export default Dialog;